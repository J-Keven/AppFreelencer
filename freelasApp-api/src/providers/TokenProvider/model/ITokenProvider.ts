import Users from '../../../models/Users';

export default interface ITokenProvider {
  generete(payload: Users): Promise<string>;
}
