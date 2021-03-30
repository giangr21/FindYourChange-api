import { EntityRepository, Repository } from 'typeorm';
import ProviderImage from '../entities/ProviderImage';

@EntityRepository(ProviderImage)
class ProviderImageRepository extends Repository<ProviderImage> {
    public async findById(id: string): Promise<ProviderImage | undefined> {
        const providerImage = await this.findOne(id);
        return providerImage;
    }

    public async setAllImagesDefaultFalse(): Promise<void> {
        await this.query("update provider_image set default = 'false'");
    }

    public async setDefaultImage(id: string): Promise<void> {
        await this.update(id, {
            defaultImage: true,
        });
    }
}

export default ProviderImageRepository;
