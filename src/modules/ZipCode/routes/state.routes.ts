import { Router } from 'express';
// import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import StateController from '../controllers/StateController';

const stateRouter = Router();
const stateController = new StateController();

// stateRouter.use(ensureAuthenticated);

stateRouter.get('/', stateController.index);
stateRouter.get('/:id', stateController.getById);

export default stateRouter;
