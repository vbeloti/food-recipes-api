import { Router } from 'express'

import AuthController from './app/controllers/AuthController'
import RecipeController from './app/controllers/RecipeController'
import UserController from './app/controllers/UserController'
// import authMiddleware from './app/middlewares/authMiddleware'

const userController = new UserController()
const authController = new AuthController()
const recipeController = new RecipeController()

const router = Router()

router.post('/users', userController.store)
router.post('/auth', authController.store)
router.post('/recipes', recipeController.store)

export default router
