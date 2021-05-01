import { Router } from 'express';
import ClerkScheduleController from '../controllers/clerkScheduleController';

const clerkSchedule = Router();
const clerkScheduleController = new ClerkScheduleController();

clerkSchedule.get('/:id', clerkScheduleController.findByProviderId);

clerkSchedule.post('/', clerkScheduleController.create);

clerkSchedule.delete('/:id', clerkScheduleController.delete);

export default clerkSchedule;
