import { Repository, getRepository } from 'typeorm';
import Categories from '@modules/freelas/infra/typeorm/entities/Categories';
import ICategoriesRepository from '@modules/freelas/repositories/ICategoriesRepository';

class CategoriesRepoitory implements ICategoriesRepository {
  private ormRepository: Repository<Categories>;

  constructor() {
    this.ormRepository = getRepository(Categories);
  }

  public async findById(id: string): Promise<Categories | undefined> {
    const categorie = this.ormRepository.findOne(id);
    return categorie;
  }

  public async findByName(
    categorieName: string,
  ): Promise<Categories | undefined> {
    const categorie = this.ormRepository.findOne({
      where: { name: categorieName },
    });

    return categorie;
  }

  public async create(name: string): Promise<Categories> {
    const categorie = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(categorie);

    return categorie;
  }
}

export default CategoriesRepoitory;
