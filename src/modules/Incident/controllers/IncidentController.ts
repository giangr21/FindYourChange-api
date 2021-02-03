import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import IncidentService from '../services/IncidentService';

export default class IncidentController {
    public async indexWithFilter(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const filter = request.body;
            const listMerchant = await incidentService.get(filter);
            return response.json(listMerchant);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const { id } = request.params;
            const merchant = await incidentService.getById(id);
            return response.json(merchant);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async testCreateIncident(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const merchant = await incidentService.incidentOrderMonitor();
            return response.json(merchant);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getIncidentsByOrderId(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const { orderId } = request.params;
            const listIncidents = await incidentService.getIncidentsByOrderId(orderId);
            return response.json(listIncidents);
        } catch (e) {
            // logger.error(e);
            throw new AppError(e);
        }
    }

    public async getIncidentsNotConcluded(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const { centralId } = request.params;
            const listIncidents = await incidentService.getIncidentsNotConcluded(centralId);
            return response.json(listIncidents);
        } catch (e) {
            // logger.error(e);
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const data = request.body;
            await incidentService.create(data);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const data = request.body;
            const incident = await incidentService.update(data);
            return response.json(incident);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const incidentService = new IncidentService();
            const { id } = request.params;

            await incidentService.delete(id);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }
}
