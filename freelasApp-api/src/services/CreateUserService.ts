import { getRepository } from 'typeorm';
import Users from '../models/Users';
import Token from './utils/Token';

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

class CreateUserServece {
  public async execute(userData: IRequestDTO): Promise<IResponseDTO> {
    const { email } = userData;
    const userRepository = getRepository(Users);

    const usersExists = await userRepository.findOne({
      where: { email },
    });

    if (usersExists) {
      throw new Error('Email address already used');
    }

    const user = userRepository.create(userData);

    await userRepository.save(user);

    const tokenUtils = new Token();

    const token = await tokenUtils.create(user);

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default CreateUserServece;
