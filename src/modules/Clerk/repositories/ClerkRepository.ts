import { EntityRepository, Repository } from 'typeorm';
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
}

export default ClerkRepository;
