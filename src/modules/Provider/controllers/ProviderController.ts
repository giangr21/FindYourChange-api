import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ProviderService from '../services/ProviderService';

export default class ProviderController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const providerService = new ProviderService();
            const listProviders = await providerService.get();
            return response.json(listProviders);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const providerService = new ProviderService();
            const { id } = request.params;
            const provider = await providerService.findById(id);
            return response.json(provider);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const providerService = new ProviderService();
            const data = request.body;
            const provider = await providerService.create(data);
            return response.json(provider);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const providerService = new ProviderService();
            const data = request.body;
            const provider = await providerService.update(data);
            return response.json(provider);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const providerService = new ProviderService();
            const { id } = request.params;
            await providerService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}