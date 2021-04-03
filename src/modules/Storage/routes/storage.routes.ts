import { Router } from 'express';
import StorageController from '../controllers/StorageController';

const storageRouter = Router();
const storageController = new StorageController();

storageRouter.get('/img/:nome', storageController.getFile);
storageRouter.get('/img/min/:nome', storageController.getFileMin);
storageRouter.get('/base64/:nome', storageController.getBase64);
storageRouter.get('/base64/min/:nome', storageController.getMinBase64);
storageRouter.post('/img', storageController.uploadFile);

export default storageRouter;
