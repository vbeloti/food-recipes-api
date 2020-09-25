import AppError from '../errors/AppError'

import User from '../models/User'
import IHashProvider from '../providers/IHashProvider'
import ITokenProvider from '../providers/ITokenProvider'
import IUsersRepository from '../repositories/IUsersRepository'
import removePassword from '../utils/removePassword'

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: Partial<User>;
  token: string;
}

class AuthUserService {
  constructor (private usersRepository: IUsersRepository, private hashProvider: IHashProvider, private tokenProvider: ITokenProvider) {}

  public async execute ({ email, password }: IRequest): Promise<IResponse> {
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

    return { user: removePassword(user), token }
  }
}

export default AuthUserService
