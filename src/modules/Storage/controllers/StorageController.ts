import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import fs from 'fs';
import StorageService from '../services/StorageService';

export default class StorageController {
    public async uploadFile(request: Request, response: Response): Promise<Response> {
        try {
            const storageService = new StorageService();
            const file = request.files;
            const img = await storageService.uploadFile(file);
            return response.status(200).json(img);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getFile(request: Request, response: Response): Promise<void> {
        try {
            const storageService = new StorageService();
            const { nome } = request.params;
            const img = await storageService.getFile(nome);
            return response.sendFile(img);
        } catch (e) {
            throw new AppError('Arquivo não encontrado', 404);
        }
    }

    public async getFileMin(request: Request, response: Response): Promise<void> {
        try {
            const storageService = new StorageService();
            const { nome } = request.params;
            const img = await storageService.getMin(nome);
            return response.sendFile(img);
        } catch (e) {
            throw new AppError('Arquivo não encontrado', 404);
        }
    }

    public async getBase64(request: Request, response: Response): Promise<Response> {
        try {
            const storageService = new StorageService();
            const { nome } = request.params;
            const img = await storageService.getFile(nome);
            const contents = fs.readFileSync(img, { encoding: 'base64' });
            return response.json(contents);
        } catch (e) {
            throw new AppError('Arquivo não encontrado', 404);
        }
    }

    public async getMinBase64(request: Request, response: Response): Promise<Response> {
        try {
            const storageService = new StorageService();
            const { nome } = request.params;
            const img = await storageService.getMin(nome);
            const contents = fs.readFileSync(img, { encoding: 'base64' });
            return response.json(contents);
        } catch (e) {
            throw new AppError('Arquivo não encontrado', 404);
        }
    }
}
