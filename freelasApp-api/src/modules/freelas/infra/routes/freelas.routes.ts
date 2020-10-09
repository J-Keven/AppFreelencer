import { Router } from 'express';
import { container } from 'tsyringe';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CreateFreelaService from '@modules/freelas/services/CreateFreelaService';

const freelasRoutes = Router();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.post('/', async (request, response) => {
  const { title, description, price } = request.body;
  const user_id = request.user.id;
  const createFreelaService = container.resolve(CreateFreelaService);

  const freela = await createFreelaService.execute({
    user_id,
    title,
    description,
    price,
  });

  return response.status(201).json(freela);
});

export default freelasRoutes;
