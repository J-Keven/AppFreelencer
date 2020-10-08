import ICreateFreelasDTO from '@modules/freelas/dtos/ICreateFreelasDTO';
import Freelas from '@modules/freelas/infra/typeorm/entities/Freelas';

export default interface IFreelasRepository {
  create(data: ICreateFreelasDTO): Promise<Freelas>;
  save(freela: Freelas): Promise<Freelas>;
}
