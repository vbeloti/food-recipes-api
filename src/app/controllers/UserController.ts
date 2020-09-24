import { Request, Response } from 'express'
import BcryptHashAdapter from '../adapters/bcrypt-hash-adapter'
import { EmailValidatorAdapter } from '../adapters/email-validator-adapter'
import UsersRepository from '../repositories/UsersRepository'
import CreateUserService from '../services/CreateUserService'

class UserController {
  async store (req: Request, res: Response) {
    const { name, email, password } = req.body

    const usersRepository = new UsersRepository()
    const hashProvider = new BcryptHashAdapter()
    const emailProvider = new EmailValidatorAdapter()
    const createUser = new CreateUserService(usersRepository, hashProvider, emailProvider)

    await createUser.execute({ name, email, password })

    return res.json({ message: 'User has been created' })
  }
}

export default UserController
