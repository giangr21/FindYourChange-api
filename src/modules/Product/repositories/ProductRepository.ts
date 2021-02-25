import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    public async findById(id: string): Promise<Product | undefined> {
        const product = await this.findOne(id);
        return product;
    }

    public async findByName(name: string): Promise<Product | undefined> {
        const product = await this.findOne({
            where: { name },
        });
        return product;
    }

    public async findByCategory(category: string): Promise<Product[] | undefined> {
        const products = await this.find({
            where: { category },
        });
        return products;
    }
}

export default ProductRepository;
