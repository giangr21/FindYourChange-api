import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProviderRecommendation from '../entities/ProviderRecommendation';
import ProviderRecommendationRepository from '../repositories/ProviderRecommendationRepository';

interface ProviderRecommendationData {
    id: string;
    notes: string;
    user: any;
    provider: any;
    rating: number;
}

export default class ProviderRecommendationService {
    public async findByProviderId(id: string): Promise<ProviderRecommendation[]> {
        const providerRecommendationRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerRecommendationRepository.findByProviderId(id);
    }

    public async findByUserId(id: string): Promise<ProviderRecommendation[]> {
        const providerRecommendationRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerRecommendationRepository.findByUserId(id);
    }

    public async getPopularRecommendations(): Promise<ProviderRecommendation[]> {
        const providerRecommendationRepository = getCustomRepository(ProviderRecommendationRepository);
        return providerRecommendationRepository.getPopularRecommendations();
    }

    public async create(providerRecommendation: ProviderRecommendationData): Promise<string> {
        const providerRecommendationRepository = getCustomRepository(ProviderRecommendationRepository);

        const providerReview = await providerRecommendationRepository.save(providerRecommendation);
        return providerReview.id;
    }

    public async delete(id: string): Promise<boolean> {
        const providerRecommendationRepository = getCustomRepository(ProviderRecommendationRepository);

        const alreadyExists = await providerRecommendationRepository.findById(id);
        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        await providerRecommendationRepository.delete(id);
        return true;
    }
}
