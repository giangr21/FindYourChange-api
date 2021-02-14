import { Router } from 'express';
import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import StorageController from '../controllers/StorageController';

const storageRouter = Router();
const storageController = new StorageController();

storageRouter.get('/img/:nome', ensureAuthenticated, storageController.getFile);
storageRouter.get('/img/min/:nome', storageController.getFileMin);
storageRouter.get('/base64/:nome', ensureAuthenticated, storageController.getBase64);
storageRouter.get('/base64/min/:nome', ensureAuthenticated, storageController.getMinBase64);
storageRouter.post('/img', storageController.uploadFile);

export default storageRouter;
