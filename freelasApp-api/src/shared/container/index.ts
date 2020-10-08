import { container } from 'tsyringe';

import IUserReposity from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import IFreelaReposity from '@modules/freelas/repositories/IFreelaRepository';
import FreelaRepository from '@modules/freelas/infra/typeorm/repositories/FreelaRepository';

import '@modules/users/infra/providers/index';

container.registerSingleton<IUserReposity>('UserRepository', UserRepository);

container.registerSingleton<IFreelaReposity>(
  'FreelaRepository',
  FreelaRepository,
);
