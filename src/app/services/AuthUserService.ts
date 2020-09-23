import AppError from '../errors/AppError'

import User from '../models/User'
import IHashProvider from '../providers/IHashProvider'
import ITokenProvider from '../providers/ITokenProvider'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthUserService {
  constructor (private usersRepository: IUsersRepository, private hashProvider: IHashProvider, private tokenProvider: ITokenProvider) {}

  public async execute ({ name, email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    )

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const token = await this.tokenProvider.generateToken({ id: user.id }, 'secret', { expiresIn: '7d' })

    user.password = ''

    return { user, token }
  }
}

export default AuthUserService
