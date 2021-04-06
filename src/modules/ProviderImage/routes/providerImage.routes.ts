import { Router } from 'express';
import ProviderImageController from '../controllers/ProviderImageController';

const providerImageRouter = Router();
const providerImageController = new ProviderImageController();

providerImageRouter.post('/', providerImageController.create);
providerImageRouter.post('/updateDefaultImage/:id', providerImageController.updateDefaultImage);

providerImageRouter.delete('/:id', providerImageController.delete);

export default providerImageRouter;
