import { getCustomRepository } from 'typeorm';
import MercadoPago from 'mercadopago';
import Product from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductService {
    public async get(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.find();
        return product;
    }

    public async findById(id: string): Promise<Product | undefined> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findByIdWithRelations(id);
        return product;
    }

    public async getProductsByProviderIdAndFilter(filter: any): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        if (!filter.providerId) {
            throw new Error('Necessario informar provider Id');
        }
        const product = await productRepository.findByFilter(filter);
        return product;
    }

    public async getProductsByFilter(filter: any): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);
        const products = await productRepository.findByMarketplaceFilter(filter);
        return products;
    }

    public async getAllProducts(): Promise<Product[] | undefined> {
        const productRepository = getCustomRepository(ProductRepository);
        const products = await productRepository.getAllProducts();
        return products;
    }

    public async findByCategory(category: string): Promise<Product[] | undefined> {
        const productRepository = getCustomRepository(ProductRepository);
        const productsArr = await productRepository.findByCategory(category);
        return productsArr;
    }

    public async create(productData: any): Promise<string> {
        const productRepository = getCustomRepository(ProductRepository);
        const alreadyExists = await productRepository.findByName(productData.name);
        if (alreadyExists) {
            throw new Error('Já existe um produto com esse nome');
        }
        const product = await productRepository.save(productData);
        return product.id;
    }

    public async update(productData: any): Promise<string> {
        const productRepository = getCustomRepository(ProductRepository);
        if (!productData.id) {
            throw new Error('Necessario informar id');
        }
        const alreadyExists = await productRepository.findById(productData.id);
        if (!alreadyExists) {
            throw new Error('É Necessário informar um id válido!');
        }
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

    public async checkout(productId: string, mercadoPagoData: any): Promise<boolean> {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findById(productId);

        if (product) {
            MercadoPago.configurations.setAccessToken('TEST-6807718697390524-051723-9d40471e78db261b65f02e1c7c74bab7-154938818');
            const paymentData = {
                transaction_amount: Number(product.value),
                token: mercadoPagoData.token,
                description: 'FYC Product from marketplace',
                installments: Number(mercadoPagoData.installments),
                payment_method_id: mercadoPagoData.payment_method_id,
                issuer_id: mercadoPagoData.issuer_id,
                payer: {
                    email: 'Admin-FYC@fyc.com.br',
                },
            };
            MercadoPago.payment
                .save(paymentData)
                .then(async (rsp: any) => {
                    await productRepository.save({
                        id: productId,
                        quantity: product.quantity >= 1 ? product.quantity - 1 : 0,
                        lastMercadoPagoId: rsp.response.id,
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
        return true;
    }
}
