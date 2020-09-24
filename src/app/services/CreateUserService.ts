import AppError from '../errors/AppError'

import User from '../models/User'
import { EmailValidator } from '../providers/EmailValidator'
import IHashProvider from '../providers/IHashProvider'
import IUsersRepository from '../repositories/IUsersRepository'

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor (private usersRepository: IUsersRepository, private hashProvider: IHashProvider, private emailProvider: EmailValidator) {}

  public async execute ({ name, email, password }: Request): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new AppError('Email address already used.', 401)
    }

    const isValidEmail = this.emailProvider.isValid(email)

    if (!isValidEmail) {
      throw new AppError('Email is invalid.', 401)
    }

    if (password.length < 8) {
      throw new AppError('Password must be contains 8 characters.', 409)
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
