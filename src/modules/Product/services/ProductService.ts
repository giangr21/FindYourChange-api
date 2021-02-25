import { getCustomRepository } from 'typeorm';
import Product from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

interface ProductData {
    id?: string;
    name: string;
    image: string;
    phone: string;
    email: string;
}

export default class ProductService {
    public async get(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.find();
        return product;
    }

    public async findById(id: string): Promise<Product | undefined> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findById(id);
        return product;
    }

    public async getProductsByProviderIdAndFilter(filter: any): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        if (!filter.providerId) {
            throw new Error('Necessario informar provider Id');
        }
        const product = await productRepository.getByFilter(filter);
        return product;
    }

    public async create(productData: ProductData): Promise<string> {
        const productRepository = getCustomRepository(ProductRepository);
        const alreadyExists = await productRepository.findByName(productData.name);
        if (alreadyExists) {
            throw new Error('Já existe um produto com esse nome');
        }
        const product = await productRepository.save(productData);
        return product.id;
    }

    public async update(productData: ProductData): Promise<string> {
        const productRepository = getCustomRepository(ProductRepository);
        if (!productData.id) {
            throw new Error('Necessario informar id');
        }
        const alreadyExists = await productRepository.findById(productData.id);
        if (!alreadyExists) {
            throw new Error('É Necessário informar um id válido!');
        }
        // const sameEmail = await productRepository.findByEmail(clerkData.email);
        // if (sameEmail && !(alreadyExists.id === sameEmail.id)) {
        //     throw new Error('Ja existe um atendente com este email');
        // }
        const product = await productRepository.save(productData);
        return product.id;
    }

    public async delete(id: string): Promise<boolean> {
        const productRepository = getCustomRepository(ProductRepository);
        const alreadyExists = await productRepository.findById(id);
        if (!alreadyExists) {
            throw new Error('É necessário informar um id válido!');
        }
        await productRepository.delete(id);
        return true;
    }
}
