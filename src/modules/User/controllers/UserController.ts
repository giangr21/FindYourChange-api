import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import { classToClass } from 'class-transformer';
import UserService from '../services/UserService';

export default class UserController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new UserService();
            const listUsers = await userService.get();
            // return response.json(classToClass(listUsers));
            return response.json(listUsers);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new UserService();
            const { id } = request.params;
            const user = await userService.getById(id);
            return response.json(classToClass(user));
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new UserService();
            const data = request.body;
            const user = await userService.create(data);
            return response.json(user);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new UserService();
            const data = request.body;
            const user = await userService.update(data);
            return response.json(user);
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new UserService();
            const { id } = request.params;

            await userService.delete(id);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }
}
