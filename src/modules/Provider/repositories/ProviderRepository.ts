import { EntityRepository, Repository } from 'typeorm';
import Provider from '../entities/Provider';

@EntityRepository(Provider)
class ProviderRepository extends Repository<Provider> {
    public async findById(id: string): Promise<Provider | undefined> {
        const provider = await this.findOne(id);
        return provider;
    }

    public async findByEmail(email: string): Promise<Provider | undefined> {
        const provider = await this.findOne({
            where: { email },
        });
        return provider;
    }

    public async findByFilter(): Promise<Provider[]> {
        const providers = await this.find();
        return providers;
    }

    public async findByIdWithSpecificFields(id: string): Promise<Provider[]> {
        const provider = await this.createQueryBuilder('provider')
        .select(['provider'])
        .leftJoin('provider.services', 'services')
        .leftJoin('provider.schedules', 'schedules')
        .where('provider.id = :providerId', {
            providerId: id,
        });
        const services = await provider.getMany();

        return services;
    }

}

export default ProviderRepository;
