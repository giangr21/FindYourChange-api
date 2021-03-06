import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import AppointmentService from '../services/AppointmentService';

export default class AppointmentController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const listAppointments = await appointmentService.get();
            return response.json(listAppointments);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getAppointmentsByFilter(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const data = request.body;
            const appointment = await appointmentService.findAppointmentByFilter(data);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const { id } = request.params;
            const appointment = await appointmentService.findById(id);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getByUserId(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const { id } = request.params;
            const appointment = await appointmentService.getByUserId(id);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getByProviderId(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const { id } = request.params;
            const appointment = await appointmentService.getByProviderId(id);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async isDayOfWeekAvailable(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const { providerId, dayOfWeek } = request.body;
            const isAvailable = await appointmentService.isDayOfWeekAvailable(dayOfWeek, providerId);
            return response.json(isAvailable);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const data = request.body;
            const appointment = await appointmentService.create(data);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const data = request.body;
            const appointment = await appointmentService.update(data);
            return response.json(appointment);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const appointmentService = new AppointmentService();
            const { id } = request.params;
            await appointmentService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
