import AppError from '@shared/errors/AppError';
import StorageUtil from '@util/storage.util';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Provider from '../entities/Provider';
import ProviderRepository from '../repositories/ProviderRepository';

interface ProviderData {
    id: string;
    name: string;
    lastName: string;
    legalName: string;
    phone: string;
    email: string;
    password: string;
    avatar: string;
    addressZipCode: string;
    addressStreet: string;
    addressNumber: number;
    addressComplement: string;
    addressArea: string;
    addressCity: string;
    addressState: string;
    addressCountry: string;
    isBarber: boolean;
    isTattoo: boolean;
    isPiercing: boolean;
}

export interface MyAppointments {
    providerId: any;
    day: number;
    month: number;
    year: number;
}

export default class ProviderService {
    public async get(): Promise<Provider[]> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const providers = await providerRepository.find();
        return providers;
    }

    public async getByFilter(filter: any): Promise<Provider[]> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const providers = await providerRepository.findByFilter(filter);
        return providers;
    }

    public async findById(id: string): Promise<Provider | undefined> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const provider = await providerRepository.findById(id);
        return provider;
    }

    public async findByIdWithSpecificFields(id: string): Promise<Provider | undefined> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const provider = await providerRepository.findByIdWithSpecificFields(id);
        return provider;
    }

    public async create(providerData: ProviderData): Promise<string> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const alreadyExists = await providerRepository.findByEmail(providerData.email);

        if (alreadyExists) {
            throw new Error('Ja existe um provider com este email');
        }

        const hashedPassword = await hash(providerData.password.toLowerCase(), 8);
        providerData.password = hashedPassword;

        const provider = await providerRepository.save(providerData);
        return provider.id;
    }

    public async update(providerData: ProviderData): Promise<string> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const storageUtil = new StorageUtil();

        const provider = await providerRepository.findById(providerData.id);

        if (!provider) {
            throw new AppError('Prestador não encontrado.');
        }

        const email = await providerRepository.findByEmail(provider.email);
        if (email && email.id !== provider.id) {
            throw new AppError('E-mail já está em uso.');
        }

        if (providerData.avatar && providerData.avatar !== provider.avatar) {
            await storageUtil.deleteFile(provider.avatar);
        }

        const newProvider = await providerRepository.save(providerData);
        return newProvider.id;
    }

    public async delete(id: string): Promise<boolean> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const alreadyExists = await providerRepository.findById(id);

        if (!alreadyExists) {
            throw new Error('Necessario informar um id valido');
        }

        await providerRepository.delete(id);
        return true;
    }

    public async getProvidersCities(): Promise<Provider[] | undefined> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const providersCities = await providerRepository.findProviderCities();
        return providersCities;
    }

    public async listMonthAvailability(): Promise<any> {
        // const { provider_id } = request.params;
        // const { month, year } = request.query;
        // const ListMonthAvailability = container.resolve(ListMonthAvailabilityService);
        // const availability = await ListMonthAvailability.execute({
        //     provider_id,
        //     month: Number(month),
        //     year: Number(year),
        // });
        // public async execute({
        //     provider_id,
        //     month,
        //     year,
        //   }: IRequest): Promise<IResponse> {
        //     const appointments = await this.appointmentRespository.findAllInMonthFromProvider(
        //       {
        //         provider_id,
        //         year,
        //         month,
        //       },
        //     );
        //     const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));
        //     // [1,2,3,4,5,6,7,8,9]
        //     const eachDayArray = Array.from(
        //       {
        //         length: numberOfDaysInMonth,
        //       },
        //       (_, index) => index + 1,
        //     );
        //     const availability = eachDayArray.map(day => {
        //       const compareDate = new Date(year, month - 1, day, 23, 59, 59);
        //       const appointmentsInDay = appointments.filter(appointment => {
        //         return getDate(appointment.date) === day;
        //       });
        //       return {
        //         day,
        //         available:
        //           isAfter(compareDate, new Date()) && appointmentsInDay.length < 10,
        //       };
        //     });
        //     return availability;
        //   }
    }

    public async findMyAppointments({ providerId, day, month, year }: MyAppointments): Promise<any> {
        const providerRepository = getCustomRepository(ProviderRepository);
        return providerRepository.findAllInDayFromProvider({
            providerId,
            year,
            month,
            day,
        });
    }

    // public async ListDayAvailability({ provider_id, day, month, year }: IRequest): Promise<IResponse> {
    //     const appointments = await this.appointmentRespository.findAllInDayFromProvider({
    //         provider_id,
    //         month,
    //         year,
    //         day,
    //     });

    //     const hourStart = 8;

    //     const eachHourArray = Array.from({ length: 10 }, (_, index) => index + hourStart);

    //     const currentDate = new Date(Date.now());

    //     const availability = eachHourArray.map(hour => {
    //         const hasAppointmentInHour = appointments.find(appointment => getHours(appointment.date) === hour);

    //         const compareDate = new Date(year, month - 1, day, hour);

    //         return {
    //             hour,
    //             available: !hasAppointmentInHour && isAfter(compareDate, currentDate),
    //         };
    //     });

    //     return availability;
    // }
}
