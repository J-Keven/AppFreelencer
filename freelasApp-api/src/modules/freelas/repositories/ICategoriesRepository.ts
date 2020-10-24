import Categories from '@modules/freelas/infra/typeorm/entities/Categories';

export default interface ICategorieRepository {
  findById(id: string): Promise<Categories | undefined>;
  findByName(categorieName: string): Promise<Categories | undefined>;
  create(categorieName: string): Promise<Categories>;
}
