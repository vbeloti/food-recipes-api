import { getRepository, Repository } from 'typeorm'

import IUsersRepository from './IUsersRepository'

import User from '../models/User'
import ICreateUser from '../providers/ICreateUser'

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor () {
    this.ormRepository = getRepository(User)
  }

  public async findById (id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id)

    return user
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } })

    return user
  }

  public async create (userData: ICreateUser): Promise<User> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }
}

export default UsersRepository
