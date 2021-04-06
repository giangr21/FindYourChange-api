import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ProviderRecommendationService from '../services/ProviderRecommendationService';

export default class ProviderRecommendation {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const providerImageService = new ProviderRecommendationService();
            const data = request.body;
            const img = await providerImageService.create(data);
            return response.json(img);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const providerImageService = new ProviderRecommendationService();
            const { id } = request.params;
            await providerImageService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
