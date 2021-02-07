import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import StateService from '../services/StateService';

export default class StateController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const service = new StateService();
            const states = await service.get();

            return response.json(states);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const service = new StateService();
            const { id } = request.params;
            const state = await service.getById(id);
            return response.json(state);
        } catch (e) {
            throw new AppError(e);
        }
    }
}
