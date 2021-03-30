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

    public async findProviderCities(): Promise<Provider[] | any> {
        const findCities = await this.createQueryBuilder('provider').select(['provider.addressCity']).distinct(true);
        const cities = await findCities.getRawMany();
        const formatedCities = cities.map(city => {
            return {
                id: city.provider_address_city,
                label: city.provider_address_city,
            };
        });
        formatedCities.push({
            id: 'Todas',
            label: 'Todas',
        });
        return formatedCities;
    }
}

export default ProviderRepository;
