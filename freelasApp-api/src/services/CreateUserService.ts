import { getRepository } from 'typeorm';
import Users from '../models/Users';

interface IRequestDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class CreateUserServece {
  public async execute(userData: IRequestDTO): Promise<Users> {
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
    delete user.password;
    return user;
  }
}

export default CreateUserServece;
