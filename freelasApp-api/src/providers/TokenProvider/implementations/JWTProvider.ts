import jwt from 'jsonwebtoken';
import ITokenProvider from '../model/ITokenProvider';
import tokenConfigs from '../../../configs/token';
import User from '../../../models/Users';

class Token implements ITokenProvider {
  public async generete(payload: User): Promise<string> {
    const { expiresIn, secretKey } = tokenConfigs;
    const token = jwt.sign({}, secretKey, {
      subject: payload.id,
      expiresIn,
    });

    return token;
  }
}

export default Token;
