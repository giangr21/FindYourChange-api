import { EntityRepository, Repository } from 'typeorm';
import ProviderRecommendation from '../entities/ProviderRecommendation';

@EntityRepository(ProviderRecommendation)
class ProviderRecommendationRepository extends Repository<ProviderRecommendation> {
    public async findById(id: string): Promise<ProviderRecommendation | undefined> {
        const providerRecommendation = await this.findOne(id);
        return providerRecommendation;
    }

    public async findByProviderId(id: string): Promise<ProviderRecommendation[]> {
        const providerRecommendations = await this.find({
            where: {
                provider: {
                    id,
                },
            },
        });
        return providerRecommendations;
    }

    public async findByUserId(id: string): Promise<ProviderRecommendation[]> {
        const providerRecommendations = await this.createQueryBuilder('providerRecommendation')
            .select('providerRecommendation')
            .where('providerRecommendation.user = :id', {
                id,
            })
            .leftJoinAndSelect('providerRecommendation.provider', 'prov')
            .getMany();

        const providerRecommendationToReturn = providerRecommendations.map((recommendation: any) => {
            const providerLegalName = recommendation.provider.legalName;
            delete recommendation.provider;
            return {
                ...recommendation,
                providerLegalName,
            };
        });

        return providerRecommendationToReturn;
    }

    public async getPopularRecommendations(): Promise<ProviderRecommendation[]> {
        const providerRecommendations = await this.createQueryBuilder('provider_recommendation').select();
        // .orderBy('service.createdAt')
        // .where('service.provider = :providerId', {
        //     providerId: filter.providerId,
        // });

        return providerRecommendations.getMany();
    }
}

export default ProviderRecommendationRepository;
