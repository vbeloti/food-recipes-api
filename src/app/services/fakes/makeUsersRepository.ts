import IUsersRepository from '../../repositories/IUsersRepository'
import User from '../../models/User'
import ICreateUser from '../../providers/ICreateUser'

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById (id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id)
    return findUser
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email)
    return findUser
  }

  public async create (userData: ICreateUser): Promise<User> {
    const user = new User()

    Object.assign(user, { id: 'valid_id' }, userData)

    this.users.push(user)
    return user
  }
}

export default FakeUsersRepository
