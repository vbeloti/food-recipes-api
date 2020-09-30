import { Request, Response } from 'express'
import DiskStorageAdapter from '../adapters/disk-storage-adapter'
import RecipesRepository from '../repositories/RecipesRepository'
import CreateRecipeService from '../services/CreateRecipeService'
import DeleteRecipeService from '../services/DeleteRecipeService'
import ListRecipeService from '../services/ListRecipeService'
import ShowRecipeService from '../services/ShowRecipeService'
import UpdateRecipeService from '../services/UpdateRecipeService'

class RecipeController {
  async index (req: Request, res: Response) {
    const recipesRepository = new RecipesRepository()
    const listRecipe = new ListRecipeService(recipesRepository)

    const recipes = await listRecipe.execute()

    return res.json(recipes)
  }

  async store (req: Request, res: Response) {
    const {
      name,
      ingredients,
      mode_prepare,
      time
    } = req.body

    const user_id = res.locals.userId

    const image = req.file.filename

    const recipesRepository = new RecipesRepository()
    const createRecipe = new CreateRecipeService(recipesRepository)

    const recipe = await createRecipe.execute({
      name,
      user_id,
      image,
      ingredients,
      mode_prepare,
      time
    })

    return res.json(recipe)
  }

  async update (req: Request, res: Response) {
    const { recipeId: recipe_id } = req.params

    const {
      name,
      ingredients,
      mode_prepare,
      time
    } = req.body

    const imageSec = req.body?.image

    let image = req.file?.filename

    if (!image) {
      image = imageSec
    }

    const recipesRepository = new RecipesRepository()
    const storageProvider = new DiskStorageAdapter()
    const updateRecipe = new UpdateRecipeService(recipesRepository, storageProvider)

    const recipe = await updateRecipe.execute({
      recipe_id,
      name,
      image,
      ingredients,
      mode_prepare,
      time
    })

    return res.json(recipe)
  }

  async delete (req: Request, res: Response) {
    const { recipeId: recipe_id } = req.params

    const recipesRepository = new RecipesRepository()
    const storageProvider = new DiskStorageAdapter()
    const deleteRecipe = new DeleteRecipeService(recipesRepository, storageProvider)

    await deleteRecipe.execute({
      recipe_id
    })

    return res.json({ message: 'Recipe has been deleted' })
  }

  async show (req: Request, res: Response) {
    const { recipeId: recipe_id } = req.params

    const recipesRepository = new RecipesRepository()
    const showRecipe = new ShowRecipeService(recipesRepository)

    const recipes = await showRecipe.execute(recipe_id)

    return res.json(recipes)
  }
}

export default RecipeController
