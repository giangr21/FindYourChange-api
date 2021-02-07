import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import AreaService from '../services/AreaService';

export default class AreaController {
    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const cervice = new AreaService();
            const { id } = request.params;
            const area = await cervice.getById(id);
            return response.json(area);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getByCityId(request: Request, response: Response): Promise<Response> {
        try {
            const cervice = new AreaService();
            const { cityId } = request.params;
            const area = await cervice.getByCityId(cityId);
            return response.json(area);
        } catch (e) {
            throw new AppError(e);
        }
    }
}
