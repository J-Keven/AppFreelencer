import { Repository, getRepository } from 'typeorm';
import Users from '@modules/users/infra/typeorm/entities/Users';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async create({
    firstName,
    lastName,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const user = this.ormRepository.create({
      firstName,
      lastName,
      email,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(userData: Users): Promise<Users> {
    await this.ormRepository.save(userData);
    return userData;
  }
}

export default UserRepository;
