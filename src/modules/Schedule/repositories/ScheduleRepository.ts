import { EntityRepository, Repository } from 'typeorm';
import Schedule from '../entities/Schedule';

@EntityRepository(Schedule)
class ScheduleRepository extends Repository<Schedule> {
    public async findById(id: string): Promise<Schedule | undefined> {
        const schedule = await this.findOne(id);
        return schedule;
    }
}

export default ScheduleRepository;
