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
        const provider = await this.createQueryBuilder('provider')
            .select([
                'provider.id',
                'provider.addressCity',
                'provider.addressArea',
                'provider.legalName',
                'provider.phone',
                'provider.isTattoo',
                'provider.isPiercing',
                'provider.isBarber',
                'service.id',
                'service.title',
                'service.value',
                'service.disccount',
                'providerImage',
            ])
            .leftJoin('provider.services', 'service', 'service.isPopularService = true')
            .leftJoin('provider.providerImages', 'providerImage', 'providerImage.defaultImage = true');

        // CONDICOES DO FILTRO VAO IR AQUI \/

        // if () ....

        const services = await provider.getMany();

        return services;
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

    public async findByIdWithSpecificFields(id: string): Promise<Provider | undefined> {
        const provider = await this.createQueryBuilder('provider')
            .select([
                'provider.id', 'provider.addressArea', 'provider.addressCity', 'provider.addressNumber',
                'provider.addressState', 'provider.addressStreet', 'provider.addressZipCode',
                'provider.email', 'provider.isBarber', 'provider.isPiercing', 'provider.isTattoo',
                'provider.legalName', 'provider.phone',
                'services',
                'schedules'
            ])
            .leftJoin('provider.services', 'services')
            .leftJoin('provider.schedules', 'schedules')
            .where('provider.id = :providerId', {
                providerId: id,
            }).getOne();

        return provider;
    }
}

export default ProviderRepository;
