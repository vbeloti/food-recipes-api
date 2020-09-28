import { Router } from 'express'
import multer from 'multer'
import uploadCOnfig from './config/upload'

import AuthController from './app/controllers/AuthController'
import RecipeController from './app/controllers/RecipeController'
import UserController from './app/controllers/UserController'
import authMiddleware from './app/middlewares/authMiddleware'

const userController = new UserController()
const authController = new AuthController()
const recipeController = new RecipeController()

const upload = multer(uploadCOnfig)

const router = Router()

router.post('/users', userController.store)
router.post('/auth', authController.store)
router.get('/recipes', recipeController.index)
router.post('/recipes', authMiddleware, upload.single('image'), recipeController.store)
router.put('/recipes/:recipeId', authMiddleware, upload.single('image'), recipeController.update)
router.get('/recipes/:recipeId', authMiddleware, recipeController.show)
router.delete('/recipes/:recipeId', authMiddleware, recipeController.delete)

export default router
