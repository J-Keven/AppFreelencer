import { injectable, inject } from 'tsyringe';
import Freelas from '../infra/typeorm/entities/Freelas';
import IFreelaRepository from '../repositories/IFreelaRepository';

interface IRequestDTO {
  user_id: string;
  title: string;
  description: string;
  price: number;
}

@injectable()
class CreateFreelaService {
  private freelaRepository: IFreelaRepository;

  constructor(
    @inject('FreelaRepository')
    freelaRepository: IFreelaRepository,
  ) {
    this.freelaRepository = freelaRepository;
  }

  public async execute({
    user_id,
    title,
    description,
    price,
  }: IRequestDTO): Promise<Freelas> {
    const freela = await this.freelaRepository.create({
      user_id,
      title,
      description,
      price,
    });

    await this.freelaRepository.save(freela);

    return freela;
  }
}

export default CreateFreelaService;
