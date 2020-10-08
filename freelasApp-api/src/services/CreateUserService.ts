import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Users from '../models/Users';
import ITokenProvider from '../providers/TokenProvider/model/ITokenProvider';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequestDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IResponseDTO {
  user: Users;
  token: string;
}

@injectable()
class CreateUserServece {
  private tokenProvider: ITokenProvider;

  private hashProvider: IHashProvider;

  constructor(
    @inject('TokenProvider')
    tokenProvider: ITokenProvider,

    @inject('HashProvider')
    hashProvider: IHashProvider,
  ) {
    this.tokenProvider = tokenProvider;
    this.hashProvider = hashProvider;
  }

  public async execute({
    email,
    firstName,
    lastName,
    password,
  }: IRequestDTO): Promise<IResponseDTO> {
    const userRepository = getRepository(Users);

    const usersExists = await userRepository.findOne({
      where: { email },
    });

    if (usersExists) {
      throw new Error('Email address already used');
    }

    const hashPassword = await this.hashProvider.create(password);
    const user = userRepository.create({
      email,
      firstName,
      lastName,
      password: hashPassword,
    });

    await userRepository.save(user);

    const token = await this.tokenProvider.generete(user);

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default CreateUserServece;
