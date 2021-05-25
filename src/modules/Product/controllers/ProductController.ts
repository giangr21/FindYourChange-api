import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const listProduct = await productService.get();
            return response.json(listProduct);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getProductsByProviderIdAndFilter(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const filter = request.body;
            const listProduct = await productService.getProductsByProviderIdAndFilter(filter);
            return response.json(listProduct);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getProductsByFilter(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const filter = request.body;
            const listProduct = await productService.getProductsByFilter(filter);
            return response.json(listProduct);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getAllProducts(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const listProduct = await productService.getAllProducts();
            return response.json(listProduct);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const { id } = request.params;
            const product = await productService.findById(id);
            return response.json(product);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getByCategory(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const { category } = request.params;
            const product = await productService.findByCategory(category);
            return response.json(product);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const data = request.body;
            const product = await productService.create(data);
            return response.json(product);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const data = request.body;
            const product = await productService.update(data);
            return response.json(product);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const { id } = request.params;
            await productService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async checkout(request: Request, response: Response): Promise<Response> {
        try {
            const productService = new ProductService();
            const { product_id } = request.params;
            const { token, payment_method_id, installments, issuer_id } = request.body;
            await productService.checkout(product_id, { token, payment_method_id, installments, issuer_id });
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
