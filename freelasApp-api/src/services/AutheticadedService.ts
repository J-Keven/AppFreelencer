import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Users from '../models/Users';
import ITokenProvider from '../providers/TokenProvider/model/ITokenProvider';

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

  constructor(
    @inject('TokenProvider')
    tokenProvider: ITokenProvider,
  ) {
    this.tokenProvider = tokenProvider;
  }

  public async execute({ email, password }: IRequestDTO): Promise<IResponse> {
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user || user.password !== password) {
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
