import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FreelasController from '../controllers/FreelasController';

const freelasRoutes = Router();
const freelasController = new FreelasController();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.post('/', freelasController.create);

export default freelasRoutes;
