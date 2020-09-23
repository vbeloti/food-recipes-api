import { Request, Response } from 'express'
import BcryptAdapter from '../adapters/bcrypt-hash-adapter'
import UsersRepository from '../repositories/UsersRepository'
import CreateUserService from '../services/CreateUserService'

class UserController {
  async store (req: Request, res: Response) {
    const { name, email, password } = req.body

    const usersRepository = new UsersRepository()
    const hashProvider = new BcryptAdapter()
    const createUser = new CreateUserService(usersRepository, hashProvider)

    await createUser.execute({ name, email, password })

    return res.json({ message: 'User has been created' })
  }
}

export default new UserController()
