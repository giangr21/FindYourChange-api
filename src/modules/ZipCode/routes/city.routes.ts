import { Router } from 'express';
// import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import CityController from '../controllers/CityController';

const cityRouter = Router();
const cityController = new CityController();

// cityRouter.use(ensureAuthenticated);

cityRouter.get('/:id', cityController.getById);
cityRouter.get('/getByState/:stateId', cityController.getByStateId);

export default cityRouter;
