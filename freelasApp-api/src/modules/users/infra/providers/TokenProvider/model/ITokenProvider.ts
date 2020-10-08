import Users from '@modules/users/infra/typeorm/entities/Users';

export default interface ITokenProvider {
  generete(payload: Users): Promise<string>;
}
