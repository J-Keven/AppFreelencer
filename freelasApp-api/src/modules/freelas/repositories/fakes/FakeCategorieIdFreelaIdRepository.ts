import { v4 as uuid } from 'uuid';
import CategorieIdFreelaId from '@modules/freelas/infra/typeorm/entities/CategorieIDFreelaId';
import ICreateCategorieIdFreelaId from '@modules/freelas/dtos/ICreateCategorieIdFreelaId';
import ICategorieIdFreelaIdRepository from '../ICategorieIdFreelaIdRepository';

class FakeCategorieIdFreelaIdRepository
  implements ICategorieIdFreelaIdRepository {
  private categorieIdFreelaIds: CategorieIdFreelaId[] = [];

  public async create({
    categorie_id,
    freela_id,
  }: ICreateCategorieIdFreelaId): Promise<CategorieIdFreelaId> {
    const categorieIdFreelaId = new CategorieIdFreelaId();
    Object.assign(categorieIdFreelaId, {
      id: uuid(),
      categorie_id,
      freela_id,
    });

    this.categorieIdFreelaIds.push(categorieIdFreelaId);
    return categorieIdFreelaId;
  }
}

export default FakeCategorieIdFreelaIdRepository;
