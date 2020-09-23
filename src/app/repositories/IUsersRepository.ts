import User from '../models/User'
import ICreateUser from '../providers/ICreateUser'

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUser): Promise<User>;
}
