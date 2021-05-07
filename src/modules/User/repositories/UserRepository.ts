import Appointment from '@modules/Appointment/entities/Appointment';
import AppointmentRepository from '@modules/Appointment/repositories/AppointmentRepository';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async findById(id: string): Promise<User | undefined> {
        const user = await this.findOne(id);
        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: { email },
        });
        return user;
    }

    public async findAllAppointmentsFromUser(userId: string): Promise<Appointment[]> {
        const appointmentsRepository = getCustomRepository(AppointmentRepository);
        const findAppointments = await appointmentsRepository
            .createQueryBuilder('appointment')
            .select([
                'appointment',
                'clerk.id',
                'clerk.name',
                'service.id',
                'service.value',
                'service.disccount',
                'service.title',
                'service.category',
                'provider.id',
            ])
            .innerJoin('appointment.clerk', 'clerk')
            .innerJoin('appointment.service', 'service')
            .innerJoin('appointment.provider', 'provider')
            .orderBy('appointment.createdAt')
            .where('appointment.user = :userId', {
                userId,
            });

        const appointments = await findAppointments.getMany();

        return appointments;
    }
}

export default UserRepository;
