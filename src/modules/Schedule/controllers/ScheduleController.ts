import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ScheduleService from '../services/ScheduleService';

export default class ScheduleController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const scheduleService = new ScheduleService();
            const listSchedule = await scheduleService.get();
            return response.json(listSchedule);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const scheduleService = new ScheduleService();
            const { id } = request.params;
            const schedule = await scheduleService.findById(id);
            return response.json(schedule);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const scheduleService = new ScheduleService();
            const data = request.body;
            const schedule = await scheduleService.create(data);
            return response.json(schedule);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const scheduleService = new ScheduleService();
            const data = request.body;
            const schedule = await scheduleService.update(data);
            return response.json(schedule);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const scheduleService = new ScheduleService();
            const { id } = request.params;
            await scheduleService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
