import { injectable, inject } from 'tsyringe';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';
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

  private userRepository: IUserRepository;

  constructor(
    @inject('FreelaRepository')
    freelaRepository: IFreelaRepository,
    @inject('UserRepository')
    userRepository: IUserRepository,
  ) {
    this.freelaRepository = freelaRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    user_id,
    title,
    description,
    price,
  }: IRequestDTO): Promise<Freelas> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

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
