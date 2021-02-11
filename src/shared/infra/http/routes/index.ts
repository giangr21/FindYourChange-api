import { Router } from 'express';

import providerRouter from '../../../../modules/Provider/routes/provider.routes';
import userRouter from '../../../../modules/User/routes/user.routes';
import sessionRouter from '../../../../modules/Sessions/routes/sessions.routes';
import clerkRouter from '../../../../modules/Clerk/routes/clerk.routes';

const routes = Router();

routes.use('/provider', providerRouter);
routes.use('/user', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/clerk', clerkRouter);

export default routes;
