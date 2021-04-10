import Appointment from '@modules/Appointment/entities/Appointment';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
    public async findById(id: string): Promise<Appointment | undefined> {
        const appointment = await this.findOne(id);
        return appointment;
    }
}

export default AppointmentRepository;
