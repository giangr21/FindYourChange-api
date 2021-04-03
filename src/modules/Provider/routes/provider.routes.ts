import { Router } from 'express';
import ProviderController from '../controllers/ProviderController';

const providerRouter = Router();
const providerController = new ProviderController();

providerRouter.get('/', providerController.index);
providerRouter.get('/:id', providerController.getById);
providerRouter.get('/cities/all', providerController.getProvidersCities);
providerRouter.get('/specificProvider/:id', providerController.getByIdWithSpecificFields);

providerRouter.post('/', providerController.getByFilter);
providerRouter.post('/add', providerController.create);

providerRouter.put('/', providerController.update);
providerRouter.delete('/:id', providerController.delete);

export default providerRouter;
