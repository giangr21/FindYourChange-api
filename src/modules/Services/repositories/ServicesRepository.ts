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

    public async findServicesByFilter(filter: any): Promise<Services[]> {
        const findServices = await this.createQueryBuilder('service')
            .select(['service'])
            .orderBy('service.createdAt')
            .where('service.provider = :providerId', {
                providerId: filter.providerId,
            });

        const services = await findServices.getMany();

        return services;
    }
}

export default ServicesRepository;
