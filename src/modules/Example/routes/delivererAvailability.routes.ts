import { Router } from 'express';
import DelivererAvailabilityController from '../controllers/DelivererAvailabilityController';

const delivererAvailabilityRouter = Router();
const delivererAvailabilityController = new DelivererAvailabilityController();

delivererAvailabilityRouter.get('/', delivererAvailabilityController.index);
delivererAvailabilityRouter.post('/', delivererAvailabilityController.create);
delivererAvailabilityRouter.put('/', delivererAvailabilityController.update);
delivererAvailabilityRouter.delete('/:id', delivererAvailabilityController.delete);

export default delivererAvailabilityRouter;
