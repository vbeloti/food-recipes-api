import { Router } from 'express'

// import AuthController from './app/controllers/AuthController'
import UserController from './app/controllers/UserController'
// import authMiddleware from './app/middlewares/authMiddleware'

const userController = new UserController()

const router = Router()

router.post('/users', userController.store)
// router.post('/auth', AuthController.create)

export default router
