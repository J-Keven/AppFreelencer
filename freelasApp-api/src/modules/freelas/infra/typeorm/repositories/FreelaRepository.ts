import { Repository, getRepository } from 'typeorm';
import ICreateFreelasDTO from '@modules/freelas/dtos/ICreateFreelasDTO';
import IFreelasRepository from '@modules/freelas/repositories/IFreelaRepository';
import Freelas from '../entities/Freelas';

class FreelasRepository implements IFreelasRepository {
  private ormRepository: Repository<Freelas>;

  constructor() {
    this.ormRepository = getRepository(Freelas);
    console.log(new Freelas());
  }

  public async findById(id: string): Promise<Freelas | undefined> {
    const freela = await this.ormRepository.findOne(id);
    return freela;
  }

  public async create({
    user_id,
    title,
    description,
    price,
  }: ICreateFreelasDTO): Promise<Freelas> {
    const freela = this.ormRepository.create({
      user_id,
      title,
      description,
      price,
    });

    await this.ormRepository.save(freela);

    return freela;
  }

  public async save(freelaData: Freelas): Promise<Freelas> {
    await this.ormRepository.save(freelaData);
    return freelaData;
  }
}
export default FreelasRepository;
