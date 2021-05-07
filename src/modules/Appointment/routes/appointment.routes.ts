import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.get('/', appointmentController.index);
appointmentRouter.get('/:id', appointmentController.getById);
appointmentRouter.get('/user/:id', appointmentController.getByUserId);
appointmentRouter.get('/provider/:id', appointmentController.getByProviderId);

appointmentRouter.post('/', appointmentController.getAppointmentsByFilter);
appointmentRouter.post('/add', appointmentController.create);
appointmentRouter.post('/isDayOfWeekAvailable', appointmentController.isDayOfWeekAvailable);

appointmentRouter.put('/', appointmentController.update);
appointmentRouter.delete('/:id', appointmentController.delete);

export default appointmentRouter;
