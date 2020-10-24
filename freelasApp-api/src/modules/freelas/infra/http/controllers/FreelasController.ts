import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFreelaService from '@modules/freelas/services/CreateFreelaService';
import CreateCategorieService from '@modules/freelas/services/CreateCategorieService';
import CreateCategorieIdFreelaIdService from '@modules/freelas/services/CreateCategorieIdFreelaIdService';

class FreelasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description, price, categories } = request.body;
    const user_id = request.user.id;

    const createFreelaService = container.resolve(CreateFreelaService);
    const createCategorieService = container.resolve(CreateCategorieService);
    const createCategorieIdFreelaIdService = container.resolve(
      CreateCategorieIdFreelaIdService,
    );

    const categoriesArray = String(categories)
      .split(',')
      .map(item => item.trim());

    const freela = await createFreelaService.execute({
      user_id,
      title,
      description,
      price,
    });

    categoriesArray.forEach(categorie => {
      createCategorieService.execute(categorie).then(async item => {
        await createCategorieIdFreelaIdService.execute({
          categorie_id: item.id,
          freela_id: freela.id,
        });
      });
    });

    return response.status(201).json(freela);
  }
}

export default FreelasController;
