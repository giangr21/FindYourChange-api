import { EntityRepository, Repository } from 'typeorm';
import Services from '../entities/Services';

@EntityRepository(Services)
class ServicesRepository extends Repository<Services> {
    public async findById(id: string): Promise<Services | undefined> {
        const service = await this.findOne(id);
        return service;
    }

    public async findByCategory(category: string): Promise<Services[] | undefined> {
        const service = await this.find({
            where: { category },
        });
        return service;
    }

    public async findByProvider(provider: string): Promise<Services[] | undefined> {
        const service = await this.find({
            where: { provider },
        });
        return service;
    }
}

export default ServicesRepository;
