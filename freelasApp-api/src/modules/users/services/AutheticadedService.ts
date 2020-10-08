import { injectable, inject } from 'tsyringe';
import Users from '../infra/typeorm/entities/Users';
import ITokenProvider from '../infra/providers/TokenProvider/model/ITokenProvider';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

interface IRequestDTO {
  email: string;
  password: string;
}

interface IResponse {
  user: Users;
  token: string;
}

@injectable()
class AutheticatedServece {
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

  public async execute({ email, password }: IRequestDTO): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect Email/Password combination');
    }

    const passworIsEqualHash = await this.hashProvider.compare({
      payload: password,
      hash: user.password,
    });

    if (!passworIsEqualHash) {
      throw new Error('Incorrect Email/Password combination');
    }

    const token = await this.tokenProvider.generete(user);

    return {
      user,
      token,
    };
  }
}

export default AutheticatedServece;
