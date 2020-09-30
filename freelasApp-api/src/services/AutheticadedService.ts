import { getRepository } from 'typeorm';
import Users from '../models/Users';
import Token from './utils/Token';

interface IRequestDTO {
  email: string;
  password: string;
}

interface IResponse {
  user: Users;
  token: string;
}

class AutheticatedServece {
  public async execute({ email, password }: IRequestDTO): Promise<IResponse> {
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user || user.password !== password) {
      throw new Error('Incorrect Email/Password combination');
    }
    const tokenUtils = new Token();

    const token = await tokenUtils.create(user);

    delete user.password;
    return {
      user,
      token,
    };
  }
}

export default AutheticatedServece;
