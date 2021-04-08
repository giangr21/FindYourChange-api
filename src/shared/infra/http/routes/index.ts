import { Router } from 'express';

import providerRouter from '../../../../modules/Provider/routes/provider.routes';
import providerImage from '../../../../modules/ProviderImage/routes/providerImage.routes';
import userRouter from '../../../../modules/User/routes/user.routes';
import sessionRouter from '../../../../modules/Sessions/routes/sessions.routes';
import clerkRouter from '../../../../modules/Clerk/routes/clerk.routes';
import scheduleRouter from '../../../../modules/Schedule/routes/schedule.routes';
import storageRouter from '../../../../modules/Storage/routes/storage.routes';
import servicesRouter from '../../../../modules/Services/routes/services.routes';
import productRouter from '../../../../modules/Product/routes/productRouter.routes';
import providerRecommendationRouter from '../../../../modules/ProviderRecommendation/routes/providerRecommendation.routes';

const routes = Router();

routes.use('/provider', providerRouter);
routes.use('/providerImages', providerImage);
routes.use('/user', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/clerk', clerkRouter);
routes.use('/schedule', scheduleRouter);
routes.use('/storage', storageRouter);
routes.use('/services', servicesRouter);
routes.use('/products', productRouter);
routes.use('/providerRecommendation', providerRecommendationRouter);

export default routes;
