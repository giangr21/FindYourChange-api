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

    public async findByFilter(filter: any): Promise<Product[]> {
        const findProducts = await this.createQueryBuilder('product')
            .select(['product'])
            .orderBy('product.createdAt')
            .where('product.provider = :providerId', {
                providerId: filter.providerId,
            });

        if (filter.value && filter.value.trim() !== '') {
            findProducts.andWhere('product.value = :value', {
                value: filter.value,
            });
        }

        if (filter.name && filter.name.trim() !== '') {
            findProducts.andWhere('product.name ilike :name', {
                name: `%${filter.name}%`,
            });
        }

        const products = await findProducts.getMany();

        return products;
    }

    public async findByCategory(category: string): Promise<Product[] | undefined> {
        const products = await this.find({
            where: { category },
        });
        return products;
    }
}

export default ProductRepository;
