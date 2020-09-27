import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';
import tokenConfigs from '../configs/token';

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

    const { expiresIn, secretKey } = tokenConfigs;

    const token = jwt.sign({}, secretKey, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default AutheticatedServece;
