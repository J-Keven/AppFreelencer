import { container } from 'tsyringe';

import IUserReposity from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import IFreelaReposity from '@modules/freelas/repositories/IFreelaRepository';
import FreelaRepository from '@modules/freelas/infra/typeorm/repositories/FreelaRepository';

import ICategoriesReposity from '@modules/freelas/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/freelas/infra/typeorm/repositories/CategoriesRepository';

import ICategorieIdFreelaIdRepository from '@modules/freelas/repositories/ICategorieIdFreelaIdRepository';
import CategorieIdFreelaIdRepository from '@modules/freelas/infra/typeorm/repositories/CategorieIdFreelaIdRepository';

import './providers';
import '@modules/users/infra/providers';

container.registerSingleton<IUserReposity>('UserRepository', UserRepository);

container.registerSingleton<IFreelaReposity>(
  'FreelaRepository',
  FreelaRepository,
);

container.registerSingleton<ICategoriesReposity>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ICategorieIdFreelaIdRepository>(
  'CategorieIdFreelaIdRepository',
  CategorieIdFreelaIdRepository,
);
