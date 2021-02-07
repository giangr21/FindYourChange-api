import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import StreetService from '../services/StreetService';

export default class StreetController {
    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const service = new StreetService();
            const { id } = request.params;
            const street = await service.getById(id);
            return response.json(street);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async find(request: Request, response: Response): Promise<Response> {
        try {
            const service = new StreetService();
            const { streetName, stateId, cityId } = request.params;
            const street = await service.find(stateId, cityId, streetName);
            return response.json(street);
        } catch (e) {
            throw new AppError(e);
        }
    }
}
