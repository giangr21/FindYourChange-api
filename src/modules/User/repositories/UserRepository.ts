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
        const appointments = await appointmentsRepository.find({
            where: { user: { id: userId } },
        });
        return appointments;
    }
}

export default UserRepository;
