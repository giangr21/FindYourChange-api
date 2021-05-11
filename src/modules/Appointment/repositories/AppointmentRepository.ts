import Appointment from '@modules/Appointment/entities/Appointment';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
    public async findById(id: string): Promise<Appointment | undefined> {
        const appointment = await this.findOne(id);
        return appointment;
    }

    public async findByProvider(provider: string): Promise<Appointment[] | undefined> {
        const appointment = await this.find({
            where: { provider },
        });
        return appointment;
    }

    public async findAppointmentByFilter(filter: any): Promise<Appointment[]> {
        const findAppointments = await this.createQueryBuilder('appointment')
            .select(['appointment'])
            .orderBy('appointment.createdAt')
            .where('appointment.service.id = :service.id', {
                providerId: filter.providerId,
            });

        const appointments = await findAppointments.getMany();

        return appointments;
    }

    public async findAppointmentByProviderId(idProvider: any): Promise<Appointment[]> {
        const findAppointments = await this.createQueryBuilder('appointment')
            .select(['appointment.id', 'appointment.dateAppointment', 'service.title', 'service.value', 'clerk.name', 'user.name'])
            .leftJoin('appointment.provider', 'provider')
            .leftJoin('appointment.service', 'service')
            .leftJoin('appointment.clerk', 'clerk')
            .leftJoin('appointment.user', 'user')
            .orderBy('appointment.dateAppointment', 'DESC')
            .where('appointment.provider.id = :providerId', {
                providerId: idProvider,
            });

        const appointments = await findAppointments.getMany();
        return appointments;
    }

    public async findAppointmentByUser(filter: any): Promise<Appointment[]> {
        const findAppointments = await this.createQueryBuilder('appointment')
            .select(['appointment'])
            .orderBy('appointment.createdAt')
            .where('appointment.user.id = :user.id', {
                providerId: filter.providerId,
            });

        const appointments = await findAppointments.getMany();

        return appointments;
    }

    public async findAppointmentByServiceType(filter: any): Promise<Appointment[]> {
        const findAppointments = await this.createQueryBuilder('appointment')
            .select(['appointment'])
            .orderBy('appointment.createdAt')
            .where('appointment.serviceType = :serviceType', {
                providerId: filter.providerId,
            });

        const appointments = await findAppointments.getMany();

        return appointments;
    }
}

export default AppointmentRepository;
