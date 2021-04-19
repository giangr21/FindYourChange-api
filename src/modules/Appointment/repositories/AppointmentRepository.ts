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
}

export default AppointmentRepository;
