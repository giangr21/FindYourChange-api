import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ClerkService from '../services/ClerkService';

export default class ClerkController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const listClerk = await clerkService.get();
            return response.json(listClerk);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getClerksByProviderId(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const { id } = request.params;
            const clerk = await clerkService.findClerksByProviderId(id);
            return response.json(clerk);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getWorkTimeByWeekDay(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const { clerkId, weekDay, selectedDate } = request.query;
            const workTime = await clerkService.findWorkTimeByWeekDay(clerkId, weekDay, selectedDate);
            return response.json(workTime);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const { id } = request.params;
            const clerk = await clerkService.findById(id);
            return response.json(clerk);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const data = request.body;
            const clerk = await clerkService.create(data);
            return response.json(clerk);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const data = request.body;
            const clerk = await clerkService.update(data);
            return response.json(clerk);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const clerkService = new ClerkService();
            const { id } = request.params;
            await clerkService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
