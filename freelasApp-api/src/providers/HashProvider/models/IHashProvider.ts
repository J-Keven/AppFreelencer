import ICompareDTO from '../dtos/ICompareDTO';

export default interface IHashPasswordProvider {
  create(payload: string): Promise<string>;
  compare(data: ICompareDTO): Promise<boolean>;
}
