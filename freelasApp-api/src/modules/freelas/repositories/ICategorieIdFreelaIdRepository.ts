import ICreateCategorieIdFreelaIdRepository from '../dtos/ICreateCategorieIdFreelaId';
import CategorieIdFreelaId from '../infra/typeorm/entities/CategorieIDFreelaId';

export default interface ICategorieIdFreelaIdRepository {
  create(
    data: ICreateCategorieIdFreelaIdRepository,
  ): Promise<CategorieIdFreelaId>;
}
