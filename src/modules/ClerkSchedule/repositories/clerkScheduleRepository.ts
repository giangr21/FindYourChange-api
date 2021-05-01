import { EntityRepository, Repository } from 'typeorm';
import ClerckSchedule from '../entities/ClerkSchedule';

@EntityRepository(ClerckSchedule)
class ClerkScheduleRepository extends Repository<ClerckSchedule> {
    public async findById(id: string): Promise<any | undefined> {
        const clerkSchedule = await this.findOne(id);
        return clerkSchedule;
    }

    public async findByProviderId(id: string): Promise<ClerckSchedule[]> {
        const businessHours = await this.find({
            where: {
                provider: {
                    id,
                },
            },
        });
        console.log(businessHours);
        return businessHours;
    }
}

export default ClerkScheduleRepository;
