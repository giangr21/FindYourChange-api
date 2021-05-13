import Appointment from '@modules/Appointment/entities/Appointment';
import { EntityRepository, getCustomRepository, Raw, Repository } from 'typeorm';
import moment from 'moment';
import Provider from '../entities/Provider';
import { MyAppointments } from '../services/ProviderService';
import AppointmentRepository from '../../Appointment/repositories/AppointmentRepository';
import StorageUtil from '../../../util/storage.util';

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

    public async findDashboardInfo(providerId: any): Promise<any> {
        const providerDashboardInfo = await this.createQueryBuilder('provider')
            .select(['provider.id', 'service.id', 'product.id', 'appointment.id', 'providerRecommendation.id'])
            .leftJoin('provider.services', 'service')
            .leftJoin('provider.products', 'product')
            .leftJoin('provider.appointments', 'appointment')
            .leftJoin('provider.providerRecommendations', 'providerRecommendation')
            .where('provider.id = :id', {
                id: providerId,
            })
            .getOne();

        return {
            services: providerDashboardInfo?.services.length,
            products: providerDashboardInfo?.products.length,
            appointments: providerDashboardInfo?.appointments.length,
            providerRecommendations: providerDashboardInfo?.providerRecommendations.length,
        };
    }

    public async findByServiceName(serviceName: any): Promise<Provider[]> {
        const providers = await this.createQueryBuilder('provider')
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
                'service.isPopularService',
                'providerImage',
            ])
            .leftJoin('provider.services', 'service')
            .leftJoin('provider.providerImages', 'providerImage', 'providerImage.defaultImage = true')
            .where('service.title ilike :serviceName', {
                serviceName: `%${serviceName.name.trim()}%`,
            })
            .getMany();

        const filteredList = providers.map((provider: any) => {
            return {
                ...provider,
                services: provider.services.filter((service: any) => service.isPopularService === true),
            };
        });
        return filteredList;
    }

    public async findByFilter(filter: any): Promise<Appointment[]> {
        const appointmentsRepository = getCustomRepository(AppointmentRepository);
        const provider = await appointmentsRepository
            .createQueryBuilder('appointment')
            .distinctOn(['provider.legalName'])
            .select([
                'appointment.id',
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
                'clerk.id',
            ])
            .leftJoin('appointment.provider', 'provider')
            .leftJoin('provider.providerImages', 'providerImage', 'providerImage.defaultImage = true')
            .leftJoin('appointment.service', 'service')
            .leftJoin('appointment.clerk', 'clerk')
            .groupBy('provider.legalName')
            .addGroupBy('appointment.id')
            .addGroupBy('provider.id')
            .addGroupBy('service.id')
            .addGroupBy('providerImage.id')
            .addGroupBy('clerk.id');

        // const provider = await this.createQueryBuilder('provider')
        //     .select([
        //         'provider.id',
        //         'provider.addressCity',
        //         'provider.addressArea',
        //         'provider.legalName',
        //         'provider.phone',
        //         'provider.isTattoo',
        //         'provider.isPiercing',
        //         'provider.isBarber',
        //         'service.id',
        //         'service.title',
        //         'service.value',
        //         'service.disccount',
        //         'providerImage',
        //     ])
        //     .leftJoin('provider.services', 'service', 'service.isPopularService = true')
        //     .leftJoin('provider.providerImages', 'providerImage', 'providerImage.defaultImage = true');

        if (filter.dateAppoitment && filter.category.trim() !== '') {
            // TODO: Filter flag hasAvailability.
        }

        if (filter.name && filter.name.trim() !== '') {
            provider.andWhere('provider.legalName ilike :name', {
                name: `%${filter.name}%`,
            });
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

        // const total = await totalTransaction.getMany();

        const services = await provider
            .skip((filter.page - 1) * 10)
            .take(10)
            .getMany();

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

    public async findByIdWithSpecificFields(id: string): Promise<any> {
        const storageUtil = new StorageUtil();
        const provider: any = await this.createQueryBuilder('provider')
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
                'clerks',
                'schedules',
                'providerImages',
                'providerRecommendations',
                'userFromProviderRecommendation.id',
                'userFromProviderRecommendation.avatar',
                'userFromProviderRecommendation.name',
                'userFromProviderRecommendation.lastName',
            ])
            .leftJoin('provider.services', 'services')
            .leftJoin('services.clerks', 'clerks')
            .leftJoin('provider.schedules', 'schedules')
            .leftJoin('provider.providerImages', 'providerImages')
            .leftJoin('provider.providerRecommendations', 'providerRecommendations')
            .leftJoin('providerRecommendations.user', 'userFromProviderRecommendation')
            .where('provider.id = :providerId', {
                providerId: id,
            })
            .getOne();

        if (provider) {
            provider.isPopular = [];
            provider.isNotPopular = [];

            for (let index = 0; index < provider.providerRecommendations.length; index++) {
                const providerRecommendation = provider.providerRecommendations[index];

                providerRecommendation.user.avatar = storageUtil.TransformImgToBase64(providerRecommendation.user.avatar);
                providerRecommendation.createdAt = moment(providerRecommendation.createdAt).format('DD/MM/YYYY - HH:mm');
            }

            for (let index = 0; index < provider.providerImages.length; index++) {
                const providerImage = provider.providerImages[index];

                const imgBase64 = storageUtil.TransformImgToBase64(providerImage.image);
                providerImage.imageBase64 = imgBase64;
                if (providerImage.defaultImage) provider.providerDefaultImg = imgBase64;
            }

            for (let index = 0; index < provider.services.length; index++) {
                const service = provider.services[index];

                if (service.isPopularService) provider.isPopular.push(service);
                else provider.isNotPopular.push(service);

                service.clerks.forEach((clerk: any) => {
                    clerk.avatar = storageUtil.TransformImgToBase64(clerk.avatar);
                });
            }
        }

        return provider;
    }

    public async findAllInMonthFromProvider({ providerId, month, year }: any): Promise<Appointment[]> {
        const appointmentsRepository = getCustomRepository(AppointmentRepository);

        const parsedMonth = String(month).padStart(2, '0');
        const appointments = await appointmentsRepository.find({
            where: {
                provider: {
                    id: providerId,
                },
                dateAppointment: Raw(dateFieldName => `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`),
            },
        });

        return appointments;
    }

    public async findAllInDayFromProvider({ providerId, day, month, year }: MyAppointments): Promise<Appointment[]> {
        const appointmentsRepository = getCustomRepository(AppointmentRepository);
        const parsedDay = String(day).padStart(2, '0');
        const parsedMonth = String(month).padStart(2, '0');

        const appointments = await appointmentsRepository.find({
            where: {
                provider: {
                    id: providerId,
                },
                dateAppointment: Raw(dateFieldName => `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`),
            },
            relations: ['user', 'service'],
        });

        return appointments;
    }
}

export default ProviderRepository;
