import ICreateFreelasDTO from '@modules/freelas/dtos/ICreateFreelasDTO';
import Freelas from '@modules/freelas/infra/typeorm/entities/Freelas';
import { v4 as uuidV4 } from 'uuid';
import IFreelasRepository from '../IFreelaRepository';

class FakeFreelasRepository implements IFreelasRepository {
  private freelas: Freelas[] = [];

  public async create({
    user_id,
    title,
    description,
    price,
  }: ICreateFreelasDTO): Promise<Freelas> {
    const freela = new Freelas();

    Object.assign(freela, {
      id: uuidV4(),
      user_id,
      title,
      description,
      price,
    });

    this.freelas.push(freela);

    return freela;
  }

  public async save(freelaData: Freelas): Promise<Freelas> {
    const index = this.freelas.findIndex(freela => freela.id === freelaData.id);

    if (index === -1) {
      this.freelas.push(freelaData);
    } else {
      this.freelas[index] = freelaData;
    }
    return freelaData;
  }
}
export default FakeFreelasRepository;
