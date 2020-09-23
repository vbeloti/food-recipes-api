import { Request, Response } from 'express'
import BcryptAdapter from '../adapters/bcrypt-hash-adapter'
import JwtTokenAdapter from '../adapters/jwt-token-adapter '
import UsersRepository from '../repositories/UsersRepository'
import AuthUserService from '../services/AuthUserService'

class AuthController {
  async create (req: Request, res: Response) {
    const { name, email, password } = req.body

    const usersRepository = new UsersRepository()
    const hashProvider = new BcryptAdapter()
    const tokenProvider = new JwtTokenAdapter()
    const createToken = new AuthUserService(usersRepository, hashProvider, tokenProvider)

    const token = await createToken.execute({ name, email, password })

    console.log(token)

    return res.json(token)
  }
}

export default new AuthController()
