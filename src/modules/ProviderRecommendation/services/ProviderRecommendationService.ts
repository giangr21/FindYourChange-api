import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProviderRecommendation from '../entities/ProviderRecommendation';
import ProviderRecommendationRepository from '../repositories/ProviderRecommendationRepository';

interface ProviderRecommendationData {
    id: string;
    notes: string;
    userName: string;
    user: any;
    provider: any;
    rating: number;
}

export default class ProviderRecommendationService {
    public async findByProviderId(id: string): Promise<ProviderRecommendation[]> {
        const providerImageRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerImageRepository.findByProviderId(id);
    }

    public async findByUserId(id: string): Promise<ProviderRecommendation[]> {
        const providerImageRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerImageRepository.findByUserId(id);
    }

    public async getPopularRecommendations(): Promise<ProviderRecommendation[]> {
        const providerImageRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerImageRepository.getPopularRecommendations();
    }

    public async create(providerRecommendation: ProviderRecommendationData): Promise<string> {
        const providerImageRepository = getCustomRepository(ProviderRecommendationRepository);

        const providerImage = await providerImageRepository.save(providerRecommendation);
        return providerImage.id;
    }

    public async delete(id: string): Promise<boolean> {
        const providerImageRepository = getCustomRepository(ProviderRecommendationRepository);

        const alreadyExists = await providerImageRepository.findById(id);
        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        await providerImageRepository.delete(id);
        return true;
    }
}
