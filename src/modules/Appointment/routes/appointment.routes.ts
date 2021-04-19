import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.get('/', appointmentController.index);
appointmentRouter.get('/:id', appointmentController.getById);

appointmentRouter.post('/', appointmentController.getServicesByFilter);
appointmentRouter.post('/add', appointmentController.create);

appointmentRouter.put('/', appointmentController.update);
appointmentRouter.delete('/:id', appointmentController.delete);

export default appointmentRouter;
