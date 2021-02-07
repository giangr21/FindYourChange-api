import { Router } from 'express';
// import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import AreaController from '../controllers/AreaController';

const areaRouter = Router();
const areaController = new AreaController();

// areaRouter.use(ensureAuthenticated);

areaRouter.get('/:id', areaController.getById);
areaRouter.get('/getByCity/:cityId', areaController.getByCityId);

export default areaRouter;
