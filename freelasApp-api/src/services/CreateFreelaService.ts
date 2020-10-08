import { getRepository } from 'typeorm';
import Freelas from '../models/Freelas';

interface IRequestDTO {
  user_id: string;
  title: string;
  description: string;
  price: number;
}

class CreateFreelaService {
  public async execute({
    user_id,
    title,
    description,
    price,
  }: IRequestDTO): Promise<Freelas> {
    const freelaRepository = getRepository(Freelas);

    const freela = freelaRepository.create({
      user_id,
      title,
      description,
      price,
    });

    await freelaRepository.save(freela);

    return freela;
  }
}

export default CreateFreelaService;
