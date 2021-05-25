import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    public async findByIdWithRelations(id: string): Promise<Product | undefined> {
        const findProduct = await this.createQueryBuilder('product')
            .select(['product', 'provider.addressCity', 'provider.legalName', 'provider.addressState', 'provider.phone'])
            .leftJoin('product.provider', 'provider')
            .where('product.id = :id', {
                id,
            })
            .getOne();

        return findProduct;
    }

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

        if (filter.category && filter.category.trim() !== '' && filter.category !== 'Todas') {
            findProducts.andWhere('product.category = :category', {
                category: filter.category,
            });
        }

        if (filter.productState && filter.productState.trim() !== '' && filter.productState !== 'Todos') {
            findProducts.andWhere('product.productStatus = :productStatus', {
                productStatus: filter.productState,
            });
        }

        const products = await findProducts.getMany();

        return products;
    }

    public async findByMarketplaceFilter(filter: any): Promise<Product[]> {
        const findProducts = await this.createQueryBuilder('product')
            .select(['product', 'product.name', 'product.description', 'product.value', 'product.productImage'])
            .leftJoin('product.provider', 'provider')
            .where('product.quantity >= 1')
            .orderBy('product.createdAt');

        if (filter.name && filter.name.trim() !== '') {
            findProducts.andWhere('product.name ilike :name', {
                name: `%${filter.name}%`,
            });
        }

        if (filter.category && filter.category.trim() !== '' && filter.category !== 'Todas') {
            findProducts.andWhere('product.category like :category', {
                category: filter.category,
            });
        }

        if (filter.price && filter.price === '250+') {
            const price = filter.price.split('+')[0];
            findProducts.andWhere(`product.value >= :price`, {
                price,
            });
        } else if (filter.price && filter.price !== 'Todos') {
            const minPrice = filter.price.split('-')[0];
            const maxPrice = filter.price.split('-')[1];
            findProducts.andWhere(`product.value BETWEEN :minPrice AND :maxPrice`, {
                minPrice,
                maxPrice,
            });
        }

        if (filter.cities && filter.cities.trim() !== '' && filter.cities !== 'Todas') {
            findProducts.andWhere('provider.addressCity like :city', {
                city: filter.cities,
            });
        }

        if (filter.productState && filter.productState.trim() !== '' && filter.productState !== 'Todos') {
            findProducts.andWhere('product.productStatus = :productStatus', {
                productStatus: filter.productState,
            });
        }

        const products = await findProducts.getMany();
        return products;
    }

    public async getAllProducts(): Promise<Product[] | undefined> {
        const product = await this.find();
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
