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

    public async findByFilter(filter: any): Promise<Provider[]> {
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

        if (filter.category && filter.category.trim() !== '') {
            // TODO: Filter flag hasAvailability.
        }

        if (filter.cities && filter.cities.trim() !== '' && filter.cities !== 'Todas') {
            provider.andWhere('provider.addressCity like :city', {
                city: filter.cities,
            });
        }

        if (filter.category && filter.category.trim() !== '' && filter.category !== 'Todos') {
            switch (filter.category) {
                case 'Barbearia':
                    provider.andWhere('provider.isBarber = true');
                    break;

                case 'BodyPiercing':
                    provider.andWhere('provider.isPiercing = true');
                    break;

                case 'Tatuagem':
                    provider.andWhere('provider.isTattoo = true');
                    break;
                default:
                    break;
            }
        }

        if (filter.price && filter.price === '250+') {
            const price = filter.price.split('+')[0];
            provider.andWhere(`service.value >= :price`, {
                price,
            });
        } else if (filter.price && filter.price !== 'Todos') {
            const minPrice = filter.price.split('-')[0];
            const maxPrice = filter.price.split('-')[1];
            provider.andWhere(`service.value BETWEEN :minPrice AND :maxPrice`, {
                minPrice,
                maxPrice,
            });
        }

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
        formatedCities.unshift({
            id: 'Todas',
            label: 'Todas',
        });
        return formatedCities;
    }

    public async findByIdWithSpecificFields(id: string): Promise<Provider | undefined> {
        const provider = await this.createQueryBuilder('provider')
            .select([
                'provider.id',
                'provider.addressArea',
                'provider.addressCity',
                'provider.addressNumber',
                'provider.addressState',
                'provider.addressStreet',
                'provider.addressZipCode',
                'provider.email',
                'provider.isBarber',
                'provider.isPiercing',
                'provider.isTattoo',
                'provider.legalName',
                'provider.phone',
                'services',
                'schedules',
            ])
            .leftJoin('provider.services', 'services')
            .leftJoin('provider.schedules', 'schedules')
            .where('provider.id = :providerId', {
                providerId: id,
            })
            .getOne();

        return provider;
    }
}

export default ProviderRepository;
