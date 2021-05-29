import AppError from '@shared/errors/AppError';
import StorageUtil from '@util/storage.util';
import { getCustomRepository } from 'typeorm';
import ProviderImageRepository from '../repositories/ProviderImageRepository';

interface ProviderImageData {
    image: string;
    defaultImage: boolean;
}

export default class ProviderImageService {
    public async create(providerImageData: ProviderImageData): Promise<string> {
        const providerImageRepository = getCustomRepository(ProviderImageRepository);

        const providerImage = await providerImageRepository.save(providerImageData);
        return providerImage.id;
    }

    public async updateDefaultImage(id: string, providerId: string): Promise<boolean> {
        const providerImageRepository = getCustomRepository(ProviderImageRepository);
        const alreadyExists = await providerImageRepository.findById(id);

        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        await providerImageRepository.setAllImagesDefaultFalse(providerId);

        await providerImageRepository.setDefaultImage(id);

        return true;
    }

    public async delete(id: string): Promise<boolean> {
        const providerImageRepository = getCustomRepository(ProviderImageRepository);
        const storageUtil = new StorageUtil();

        const alreadyExists = await providerImageRepository.findById(id);
        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        storageUtil.deleteFile(alreadyExists.image);

        await providerImageRepository.delete(id);
        return true;
    }
}
