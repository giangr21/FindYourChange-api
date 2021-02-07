import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.loginUser);

sessionsRouter.post('/forgotPassword', sessionsController.forgotPassword);
sessionsRouter.post('/resetPassword', sessionsController.resetPassword);

export default sessionsRouter;
