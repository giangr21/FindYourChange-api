import AppError from '@shared/errors/AppError';
import StorageUtil from '@util/storage.util';
import { getCustomRepository } from 'typeorm';
import Services from '../entities/Services';
import ServicesRepository from '../repositories/ServicesRepository';

interface ServicesData {
    id: string;
    title: string;
    description: string;
    value: number;
    disccount: number;
    category: string;
    time: string;
    image: string;
    provider: any;
}

export default class ServicesService {
    public async get(): Promise<Services[]> {
        const serviceRepository = getCustomRepository(ServicesRepository);
        const service = await serviceRepository.find();
        return service;
    }

    public async findServicesByFilter(filter: any): Promise<Services[]> {
        const servicesRepository = getCustomRepository(ServicesRepository);
        if (!filter.providerId) {
            throw new Error('Necessario informar um provider ID');
        }

        const clerks = await servicesRepository.findServicesByFilter(filter);
        return clerks;
    }

    public async findById(id: string): Promise<Services | undefined> {
        const servicesRepository = getCustomRepository(ServicesRepository);
        const service = await servicesRepository.findById(id);
        return service;
    }

    public async create(servicesData: ServicesData): Promise<string> {
        const servicesRepository = getCustomRepository(ServicesRepository);
        const service = await servicesRepository.save(servicesData);
        return service.id;
    }

    public async update(servicesData: ServicesData): Promise<string> {
        const servicesRepository = getCustomRepository(ServicesRepository);
        const storageUtil = new StorageUtil();

        const service = await servicesRepository.findById(servicesData.id);

        if (!service) {
            throw new AppError('Serviço não encontrado.');
        }

        if (servicesData.image && servicesData.image !== service.image) {
            await storageUtil.deleteFile(service.image);
        }

        const newService = await servicesRepository.save(servicesData);
        return newService.id;
    }

    public async delete(id: string): Promise<boolean> {
        const servicesRepository = getCustomRepository(ServicesRepository);
        const alreadyExists = await servicesRepository.findById(id);
        if (!alreadyExists) {
            throw new Error('É necessário informar um id válido!');
        }
        await servicesRepository.delete(id);
        return true;
    }
}
