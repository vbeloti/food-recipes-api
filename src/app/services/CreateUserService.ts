import AppError from '../errors/AppError'

import User from '../models/User'
import IHashProvider from '../providers/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor (private usersRepository: IUsersRepository, private hashProvider: IHashProvider) {}

  public async execute ({ name, email, password }: Request): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new AppError('Email address already used.', 401)
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })

    return user
  }
}

export default CreateUserService
