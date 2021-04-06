import { EntityRepository, Repository } from 'typeorm';
import ProviderRecommendation from '../entities/ProviderRecommendation';

@EntityRepository(ProviderRecommendation)
class ProviderRecommendationRepository extends Repository<ProviderRecommendation> {
    public async findById(id: string): Promise<ProviderRecommendation | undefined> {
        const providerImage = await this.findOne(id);
        return providerImage;
    }

    public async findByImageId(id: string): Promise<ProviderRecommendation | undefined> {
        const providerImage = await this.findOne({
            where: {
                image: id,
            },
        });
        return providerImage;
    }
}

export default ProviderRecommendationRepository;
