import { Router } from 'express';
import ClerkController from '../controllers/ClerkController';

const clerkRouter = Router();
const clerkController = new ClerkController();

clerkRouter.get('/', clerkController.index);
clerkRouter.get('/:id', clerkController.getById);
clerkRouter.get('/provider/:id', clerkController.getClerksByProviderId);
clerkRouter.get('/getWorkTime/weekDay', clerkController.getWorkTimeByWeekDay);

clerkRouter.post('/', clerkController.create);

clerkRouter.put('/', clerkController.update);
clerkRouter.delete('/:id', clerkController.delete);

export default clerkRouter;
