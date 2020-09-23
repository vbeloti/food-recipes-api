import AppError from '../errors/AppError'

import User from '../models/User'
import IHashProvider from '../adapters/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor (private usersRepository: IUsersRepository, private hashProvider: IHashProvider) {}

  public async execute ({ name, email, password }: Request): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
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
