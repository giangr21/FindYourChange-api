import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import CityService from '../services/CityService';

export default class CityController {
    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const service = new CityService();
            const { id } = request.params;
            const city = await service.getById(id);
            return response.json(city);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getByStateId(request: Request, response: Response): Promise<Response> {
        try {
            const service = new CityService();
            const { stateId } = request.params;
            const city = await service.getByStateId(stateId);
            return response.json(city);
        } catch (e) {
            throw new AppError(e);
        }
    }
}
