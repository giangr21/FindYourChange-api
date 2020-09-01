import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import DelivererAvailabilityService from '../services/DelivererAvailabilityService';

export default class DelivererAvailabilityController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const delivererAvailabilityService = new DelivererAvailabilityService();
            const listDelivererAvailability = await delivererAvailabilityService.get();
            return response.json(listDelivererAvailability);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const delivererAvailabilityService = new DelivererAvailabilityService();
            const data = request.body;
            const delivererAvailability = await delivererAvailabilityService.create(data);
            return response.json(delivererAvailability);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const delivererAvailabilityService = new DelivererAvailabilityService();
            const data = request.body;
            const delivererAvailability = await delivererAvailabilityService.update(data);
            return response.json(delivererAvailability);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const delivererAvailabilityService = new DelivererAvailabilityService();
            const { id } = request.params;

            await delivererAvailabilityService.delete(id);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async notificate(request: Request, response: Response): Promise<Response> {
        try {
            const delivererAvailabilityService = new DelivererAvailabilityService();
            const listDelivererAvailability = await delivererAvailabilityService.get();
            return response.json(listDelivererAvailability);
        } catch (e) {
            throw new AppError(e);
        }
    }
}
