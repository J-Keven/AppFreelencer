import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFreelaService from '@modules/freelas/services/CreateFreelaService';

class FreelasController {
  public async create(request: Request, response: Response): Promise<Response> {
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
  }
}

export default FreelasController;
