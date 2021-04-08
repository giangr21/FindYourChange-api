import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ProviderRecommendationService from '../services/ProviderRecommendationService';

export default class ProviderRecommendation {
    public async findByProviderId(request: Request, response: Response): Promise<Response> {
        try {
            const providerRecommendationService = new ProviderRecommendationService();
            const { id } = request.params;
            const recommendations = await providerRecommendationService.findByProviderId(id);
            return response.json(recommendations);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async findByUserId(request: Request, response: Response): Promise<Response> {
        try {
            const providerRecommendationService = new ProviderRecommendationService();
            const { id } = request.params;
            const recommendations = await providerRecommendationService.findByUserId(id);
            return response.json(recommendations);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getPopularRecommendations(request: Request, response: Response): Promise<Response> {
        try {
            const providerRecommendationService = new ProviderRecommendationService();
            const recommendations = await providerRecommendationService.getPopularRecommendations();
            return response.json(recommendations);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const providerRecommendationService = new ProviderRecommendationService();
            const data = request.body;
            const img = await providerRecommendationService.create(data);
            return response.json(img);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const providerRecommendationService = new ProviderRecommendationService();
            const { id } = request.params;
            await providerRecommendationService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
