import { Router } from 'express';
import userRoutes from './user.routes';
import sessionRoutes from './session.routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/login', sessionRoutes);
export default routes;
