import { Router } from 'express';
import ServicesController from '../controllers/ServicesController';

const servicesRouter = Router();
const servicesController = new ServicesController();

servicesRouter.get('/', servicesController.index);
servicesRouter.get('/:id', servicesController.getById);
servicesRouter.post('/', servicesController.create);
servicesRouter.put('/', servicesController.update);
servicesRouter.delete('/:id', servicesController.delete);

export default servicesRouter;
