import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import ServicesService from '../services/ServicesService';

export default class ServicesController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const listServices = await servicesService.get();
            return response.json(listServices);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getServicesByFilter(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const data = request.body;
            const service = await servicesService.findServicesByFilter(data);
            return response.json(service);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const { id } = request.params;
            const service = await servicesService.findById(id);
            return response.json(service);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const data = request.body;
            const service = await servicesService.create(data);
            return response.json(service);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const data = request.body;
            const service = await servicesService.update(data);
            return response.json(service);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const servicesService = new ServicesService();
            const { id } = request.params;
            await servicesService.delete(id);
            return response.status(204).send();
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }
}
