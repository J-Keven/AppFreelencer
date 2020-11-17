import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Users from '../infra/typeorm/entities/Users';
import ITokenProvider from '../infra/providers/TokenProvider/model/ITokenProvider';
import IHashProvider from '../infra/providers/HashProvider/model/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

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
  private userRepository: IUserRepository;

  private tokenProvider: ITokenProvider;

  private hashProvider: IHashProvider;

  constructor(
    @inject('UserRepository')
    userRepository: IUserRepository,

    @inject('TokenProvider')
    tokenProvider: ITokenProvider,

    @inject('HashProvider')
    hashProvider: IHashProvider,
  ) {
    this.userRepository = userRepository;
    this.tokenProvider = tokenProvider;
    this.hashProvider = hashProvider;
  }

  public async execute({
    email,
    firstName,
    lastName,
    password,
  }: IRequestDTO): Promise<IResponseDTO> {
    const usersExists = await this.userRepository.findByEmail(email);

    if (usersExists) {
      throw new AppError('Email address already used');
    }

    const hashPassword = await this.hashProvider.create(password);

    const user = await this.userRepository.create({
      email,
      firstName,
      lastName,
      password: hashPassword,
    });

    await this.userRepository.save(user);

    const token = await this.tokenProvider.generete(user);

    return {
      user,
      token,
    };
  }
}

export default CreateUserServece;
