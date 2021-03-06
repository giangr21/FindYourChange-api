import { Router } from 'express';
import ScheduleController from '../controllers/ScheduleController';

const scheduleRouter = Router();
const scheduleController = new ScheduleController();

scheduleRouter.get('/', scheduleController.index);
scheduleRouter.get('/:id', scheduleController.getById);
scheduleRouter.get('/provider/:id', scheduleController.getByProviderId);
scheduleRouter.post('/', scheduleController.create);
scheduleRouter.post('/isDayOfWeekAvailable', scheduleController.isDayOfWeekAvailable);
scheduleRouter.put('/', scheduleController.update);
scheduleRouter.delete('/:id', scheduleController.delete);

export default scheduleRouter;
