import { EntityRepository, Repository } from 'typeorm';
import ClerkSchedule from '../entities/ClerkSchedule';

@EntityRepository(ClerkSchedule)
class ClerkScheduleRepository extends Repository<ClerkSchedule> {
    public async findById(id: string): Promise<any | undefined> {
        const clerkSchedule = await this.findOne(id);
        return clerkSchedule;
    }

    public async findScheduleByClerkId(id: string): Promise<ClerkSchedule[]> {
        const businessHours = await this.find({
            where: {
                provider: {
                    id,
                },
            },
        });
        return businessHours;
    }

    public async deleteByProviderId(id: string): Promise<boolean | void> {
        await this.createQueryBuilder()
            .delete()
            .from(ClerkSchedule)
            .where('clerk = :clerkId', {
                clerkId: id,
            })
            .execute();
    }

    public async saveClerkSchedule(clerkSchedule: any): Promise<string> {
        const clerkId = clerkSchedule.shift();
        const clerkScheduleArr = clerkSchedule.map((clerkObj: any) => {
            return {
                ...clerkObj,
                clerk: clerkId,
            };
        });
        let clerkScheduleRep: any;
        for (let i = 0; i < clerkScheduleArr.length; i++) {
            // eslint-disable-next-line no-await-in-loop
            clerkScheduleRep = await this.save(clerkScheduleArr[i]);
        }
        return clerkScheduleRep;
    }
}

export default ClerkScheduleRepository;
