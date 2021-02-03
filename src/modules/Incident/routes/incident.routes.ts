import { Router } from 'express';
import ensureAuthenticated from '@modules/Sessions/middlewares/ensureAuthenticated';
import IncidentController from '../controllers/IncidentController';

const incidentRouter = Router();
const incidentController = new IncidentController();
incidentRouter.use(ensureAuthenticated);

incidentRouter.get('/:id', incidentController.getById);
incidentRouter.get('/orderId/:orderId', incidentController.getIncidentsByOrderId);
incidentRouter.get('/incidentsNotConcluded/:centralId', incidentController.getIncidentsNotConcluded);
incidentRouter.get('/test/testIncidentMonitor', incidentController.testCreateIncident);
incidentRouter.post('/', incidentController.indexWithFilter);
incidentRouter.post('/add', incidentController.create);
incidentRouter.put('/', incidentController.update);
incidentRouter.delete('/:id', incidentController.delete);

export default incidentRouter;
