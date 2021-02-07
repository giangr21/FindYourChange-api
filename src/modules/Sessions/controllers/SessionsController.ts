import { Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import SessionsService from '../services/SessionsService';

export default class SessionsController {
    public async loginUser(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password, isProvider } = request.body;

            if (!email || !password) {
                throw new AppError('Necessário informar Email e Senha do Usuário');
            }

            const sessionsService = new SessionsService();

            const { user, token } = await sessionsService.login({
                email,
                password,
                isProvider,
            });

            return response.json({ user, token });
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async forgotPassword(request: Request, response: Response): Promise<Response> {
        try {
            const sessionsService = new SessionsService();
            const { email, systemType } = request.body;
            await sessionsService.sendForgotPasswordEmail(email, systemType);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }

    public async resetPassword(request: Request, response: Response): Promise<Response> {
        try {
            const sessionsService = new SessionsService();
            const { password, token, systemType } = request.body;
            await sessionsService.resetPassword(token, password, systemType);
            return response.status(204).send();
        } catch (e) {
            throw new AppError(e);
        }
    }
}
