import { Router } from 'express';
import ClerkController from '../controllers/ProviderImageController';

const clerkRouter = Router();
const clerkController = new ClerkController();

clerkRouter.post('/', clerkController.create);
clerkRouter.post('/updateDefaultImage/:id', clerkController.updateDefaultImage);

clerkRouter.delete('/:id', clerkController.delete);

export default clerkRouter;
