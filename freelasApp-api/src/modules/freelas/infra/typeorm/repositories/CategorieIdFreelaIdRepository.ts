import { v4 as uuid } from 'uuid';
import { Repository, getRepository } from 'typeorm';
import CategorieIdFreelaId from '@modules/freelas/infra/typeorm/entities/CategorieIDFreelaId';
import ICreateCategorieIdFreelaId from '@modules/freelas/dtos/ICreateCategorieIdFreelaId';
import ICategorieIdFreelaIdRepository from '@modules/freelas/repositories/ICategorieIdFreelaIdRepository';

class FakeCategorieIdFreelaIdRepository
  implements ICategorieIdFreelaIdRepository {
  private ormRepository: Repository<CategorieIdFreelaId>;

  constructor() {
    this.ormRepository = getRepository(CategorieIdFreelaId);
  }

  public async create({
    categorie_id,
    freela_id,
  }: ICreateCategorieIdFreelaId): Promise<CategorieIdFreelaId> {
    const categorieIdFreelaId = this.ormRepository.create({
      freela_id,
      categorie_id,
    });

    await this.ormRepository.save(categorieIdFreelaId);
    return categorieIdFreelaId;
  }
}

export default FakeCategorieIdFreelaIdRepository;
