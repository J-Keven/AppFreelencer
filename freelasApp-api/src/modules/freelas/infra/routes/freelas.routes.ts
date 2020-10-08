import { Router } from 'express';
import { container } from 'tsyringe';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FreelaRepository from '../typeorm/repositories/FreelaRepository';
import CreateFreelaService from '../../services/CreateFreelaService';

const freelasRoutes = Router();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.post('/', async (request, response) => {
  const { title, description, price } = request.body;
  const user_id = request.user.id;
  const createFreelaService = new CreateFreelaService(new FreelaRepository());

  const freela = await createFreelaService.execute({
    user_id,
    title,
    description,
    price,
  });

  return response.status(201).json(freela);
});

export default freelasRoutes;
