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

    public async getPopularRecommendations(): Promise<any> {
        const providerRecommendations = await this.createQueryBuilder('providerRecommendation')
            .select([
                'providerRecommendation.rating',
                'providerRecommendation.id',
                'provider.legalName',
                'provider.addressCity',
                'provider.phone',
                'providerImage',
            ])
            .innerJoin('providerRecommendation.provider', 'provider')
            .leftJoin('provider.providerImages', 'providerImage', 'providerImage.defaultImage = true')
            .orderBy('providerRecommendation.rating', 'DESC')
            .where('providerRecommendation.rating = 5 or providerRecommendation.rating = 4')
            .limit(10)
            .getMany();

        for (let i = providerRecommendations.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = providerRecommendations[i];
            providerRecommendations[i] = providerRecommendations[j];
            providerRecommendations[j] = temp;
        }

        return [...new Map(providerRecommendations.map(item => [item.provider.legalName, item])).values()];
    }
}

export default ProviderRecommendationRepository;
