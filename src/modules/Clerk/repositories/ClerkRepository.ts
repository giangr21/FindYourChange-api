import Appointment from '@modules/Appointment/entities/Appointment';
import AppointmentRepository from '@modules/Appointment/repositories/AppointmentRepository';
import ClerkSchedule from '@modules/ClerkSchedule/entities/ClerkSchedule';
import ClerkScheduleRepository from '@modules/ClerkSchedule/repositories/clerkScheduleRepository';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Clerk from '../entities/Clerk';

@EntityRepository(Clerk)
class ClerkRepository extends Repository<Clerk> {
    public async findById(id: string): Promise<Clerk | undefined> {
        const clerk = await this.findOne(id);
        return clerk;
    }

    public async findByEmail(email: string): Promise<Clerk | undefined> {
        const clerk = await this.findOne({
            where: { email },
        });
        return clerk;
    }

    public async findClerksByProviderId(id: string): Promise<Clerk[]> {
        const findClerk = await this.createQueryBuilder('clerk')
            .select(['clerk'])
            .orderBy('clerk.createdAt')
            .where('clerk.provider = :id', {
                id,
            });

        const clerks = await findClerk.getMany();

        return clerks;
    }

    public async findAppointmentsByClerkIdAndDate(clerkId: string, dateAppointment: string): Promise<Appointment[]> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);

        const findAppointments = await appointmentRepository
            .createQueryBuilder('appointment')
            .select(['appointment'])
            .where('appointment.clerk = :clerkId', {
                clerkId,
            })
            .andWhere('DATE (appointment.dateAppointment) = :dateAppointment', {
                dateAppointment,
            })
            .orderBy('appointment.createdAt')
            .getMany();

        return findAppointments;
    }

    public async findWorkTimeByWeekDay(clerkId: string, weekDay: string): Promise<ClerkSchedule | undefined> {
        const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);
        const findClerk = await clerkScheduleRepository
            .createQueryBuilder('clerkSchedule')
            .select(['clerkSchedule.id', 'clerkSchedule.hourStart', 'clerkSchedule.hourEnd'])
            .where('clerkSchedule.dayOfWeek = :weekDay', {
                weekDay,
            })
            .andWhere('clerkSchedule.clerk = :clerkId', {
                clerkId,
            })
            .getOne();

        return findClerk;
    }
}

export default ClerkRepository;
