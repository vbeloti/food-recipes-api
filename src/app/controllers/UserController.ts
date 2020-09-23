import { Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'

class UserController {
  async store (req: Request, res: Response) {
    const { name, email, password } = req.body

    const createUser = new CreateUserService()

    await createUser.execute({ name, email, password })

    return res.json({ message: 'User has been created' })
  }
}

export default new UserController()
