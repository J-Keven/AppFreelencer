import { container } from 'tsyringe';
import ITokenProvider from './TokenProvider/model/ITokenProvider';
import TokenProvider from './TokenProvider/implementations/JWTProvider';

import IHashProvider from './HashProvider/model/IHashProvider';
import BCryptProvider from './HashProvider/implementations/BCryptProvider';

container.registerSingleton<ITokenProvider>('TokenProvider', TokenProvider);
container.registerSingleton<IHashProvider>('HashProvider', BCryptProvider);
