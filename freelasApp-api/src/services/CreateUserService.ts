import { getRepository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Users from '../models/Users';
import ITokenProvider from '../providers/TokenProvider/model/ITokenProvider';

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

  constructor(
    @inject('TokenProvider')
    tokenProvider: ITokenProvider,
  ) {
    this.tokenProvider = tokenProvider;
  }

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

    const token = await this.tokenProvider.generete(user);

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default CreateUserServece;
