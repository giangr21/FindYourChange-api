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
}
