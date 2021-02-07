import { Router } from 'express';
// import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import StreetController from '../controllers/StreetController';

const streetRouter = Router();
const streetController = new StreetController();

// streetRouter.use(ensureAuthenticated);

streetRouter.get('/:id', streetController.getById);
streetRouter.get('/find/:stateId/:cityId/:streetName', streetController.find);

export default streetRouter;
