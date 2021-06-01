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
        const findServices = await this.createQueryBuilder('service').select(['service']).orderBy('service.createdAt');

        if (filter.serviceName && filter.serviceName.trim() !== '') {
            findServices.andWhere('service.title ilike :serviceName', {
                serviceName: `%${filter.serviceName}%`,
            });
        }

        if (filter.value && filter.value.trim() !== '') {
            findServices.andWhere('service.value = :serviceValue', {
                serviceValue: filter.value,
            });
        }

        if (filter.category && filter.category !== 'Todas' && filter.category.trim() !== '') {
            findServices.andWhere('service.category = :category', {
                category: filter.category,
            });
        }

        if (filter.timeService && filter.timeService === '120') {
            findServices.andWhere('service.time >= :timeService', {
                timeService: filter.timeService,
            });
        } else if (filter.timeService && filter.timeService !== 'Todos' && filter.timeService.trim() !== '') {
            findServices.andWhere('service.time = :timeService', {
                timeService: filter.timeService,
            });
        }

        if (filter.typeService && filter.typeService !== 'Todos' && filter.typeService.trim() !== '') {
            findServices.andWhere('service.isPopularService = :typeService', {
                typeService: filter.typeService === 'Popular',
            });
        }

        findServices.andWhere('service.provider = :providerId', {
            providerId: filter.providerId,
        });

        const services = await findServices.getMany();

        return services;
    }
}

export default ServicesRepository;
