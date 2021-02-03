import { Router } from 'express';

import providerRouter from '../../../../modules/Provider/routes/provider.routes';
import userRouter from '../../../../modules/User/routes/user.routes';

const routes = Router();

routes.use('/provider', providerRouter);
routes.use('/user', userRouter);

export default routes;
