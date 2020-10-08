import { Router } from 'express';
import userRoutes from './user.routes';
import sessionRoutes from './session.routes';
import profileRoutes from './profile.routes';
import freelaRoutes from './freelas.routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/login', sessionRoutes);
routes.use('/profile', profileRoutes);
routes.use('/freelas', freelaRoutes);

export default routes;
