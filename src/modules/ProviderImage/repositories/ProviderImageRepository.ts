import { EntityRepository, Repository } from 'typeorm';
import ProviderImage from '../entities/ProviderImage';

@EntityRepository(ProviderImage)
class ProviderImageRepository extends Repository<ProviderImage> {
    public async findById(id: string): Promise<ProviderImage | undefined> {
        const providerImage = await this.findOne(id);
        return providerImage;
    }

    public async findByImageId(id: string): Promise<ProviderImage | undefined> {
        const providerImage = await this.findOne({
            where: {
                image: id,
            },
        });
        return providerImage;
    }

    public async setAllImagesDefaultFalse(providerId: string): Promise<void> {
        await this.query(`UPDATE provider_image SET default_image = 'false' where provider_id = '${providerId}'`);
    }

    public async setDefaultImage(id: string): Promise<void> {
        await this.update(id, {
            defaultImage: true,
        });
    }
}

export default ProviderImageRepository;
