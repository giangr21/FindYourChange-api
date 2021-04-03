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

export default class ProviderService {
    public async get(): Promise<Provider[]> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const providers = await providerRepository.find();
        return providers;
    }

    public async getByFilter(): Promise<Provider[]> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const providers = await providerRepository.findByFilter();
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
}
