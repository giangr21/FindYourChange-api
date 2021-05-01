import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ClerkScheduleService from '../services/clerkScheduleService';

export default class ClerkScheduleController {
    public async findByProviderId(request: Request, response: Response): Promise<Response> {
        try {
            const clerkScheduleService = new ClerkScheduleService();
            const { id } = request.params;
            const businessHours = await clerkScheduleService.findByProviderId(id);
            return response.json(businessHours);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const clerkScheduleService = new ClerkScheduleService();
            const data = request.body;
            const img = await clerkScheduleService.create(data);
            return response.json(img);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const clerkScheduleService = new ClerkScheduleService();
            const { id } = request.params;
            await clerkScheduleService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
