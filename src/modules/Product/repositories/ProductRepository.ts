import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    public async findById(id: string): Promise<Product | undefined> {
        const product = await this.findOne(id);
        return product;
    }

    public async findByEmail(email: string): Promise<Product | undefined> {
        const product = await this.findOne({
            where: { email },
        });
        return product;
    }
}

export default ProductRepository;
