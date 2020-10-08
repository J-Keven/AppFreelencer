import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Users from '../models/Users';
import ITokenProvider from '../providers/TokenProvider/model/ITokenProvider';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

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

  public async execute({ email, password }: IRequestDTO): Promise<IResponse> {
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({
      where: { email },
    });

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

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default AutheticatedServece;
