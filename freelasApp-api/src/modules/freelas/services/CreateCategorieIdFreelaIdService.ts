import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import CategorieIdFreelaId from '../infra/typeorm/entities/CategorieIDFreelaId';
import ICategorieIdFreelaIdRepository from '../repositories/ICategorieIdFreelaIdRepository';
import IFreelaRepository from '../repositories/IFreelaRepository';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  categorie_id: string;
  freela_id: string;
}

@injectable()
class CreateCategorieIdFreelaIdService {
  private categorieIdFreelaIdRepository: ICategorieIdFreelaIdRepository;

  private freelasRepository: IFreelaRepository;

  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategorieIdFreelaIdRepository')
    categorieIdFreelaIdRepository: ICategorieIdFreelaIdRepository,
    @inject('FreelaRepository')
    freelasRepository: IFreelaRepository,
    @inject('CategoriesRepository')
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categorieIdFreelaIdRepository = categorieIdFreelaIdRepository;
    this.freelasRepository = freelasRepository;
    this.categoriesRepository = categoriesRepository;
  }

  public async execute({
    categorie_id,
    freela_id,
  }: IRequest): Promise<CategorieIdFreelaId> {
    const freela = await this.freelasRepository.findById(freela_id);
    if (!freela) {
      throw new AppError('I didnt find any freela with this id');
    }

    const categorie = await this.categoriesRepository.findById(categorie_id);
    if (!categorie) {
      throw new AppError('I didnt find any categorie with this id');
    }
    const categorieIdFreelaId = await this.categorieIdFreelaIdRepository.create(
      {
        categorie_id,
        freela_id,
      },
    );
    return categorieIdFreelaId;
  }
}

export default CreateCategorieIdFreelaIdService;
