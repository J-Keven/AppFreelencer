import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IStorageProvader from '@shared/container/providers/StorageProvider/model/IStorageProvider';
import Users from '../infra/typeorm/entities/Users';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  id: string;
  filename: string;
}
@injectable()
class UpdateAvatarService {
  private userRepository: IUserRepository;

  private storageProvider: IStorageProvader;

  constructor(
    @inject('UserRepository')
    userRepository: IUserRepository,
    @inject('StorageProvider')
    storageProvider: IStorageProvader,
  ) {
    this.userRepository = userRepository;
    this.storageProvider = storageProvider;
  }

  public async execute({ id, filename }: IRequest): Promise<Users> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('This user not found');
    }

    if (user.avatar) {
      await this.storageProvider.delete(user.avatar);
    }

    await this.storageProvider.save(filename);

    user.avatar = filename;

    await this.userRepository.save(user);
    return user;
  }
}

export default UpdateAvatarService;
