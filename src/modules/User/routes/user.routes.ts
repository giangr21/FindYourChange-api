import { Router } from 'express';
// import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userController.create);
userRouter.put('/', userController.update);
userRouter.delete('/:id', userController.delete);

userRouter.get('/appointments/:id', userController.getMyAppointments);

export default userRouter;
