import AppError from '../errors/AppError'
import IStorageProvider from '../providers/IStorageProvider'
import IRecipesRepository from '../repositories/IRecipesRepository'

interface Request {
  recipe_id: string;
  name: string;
  image: string;
  ingredients: string;
  mode_prepare: string;
  time: string;
}

class UpdateRecipeService {
  constructor (private recipesRepository: IRecipesRepository, private storageProvider: IStorageProvider) { }

  public async execute ({
    recipe_id,
    name,
    image,
    ingredients,
    mode_prepare,
    time
  }: Request) {
    const recipe = await this.recipesRepository.findById(recipe_id)

    if (!recipe) {
      throw new AppError('This recipes does not exists')
    }

    const data = [name, image, ingredients, mode_prepare]

    data.forEach((element) => {
      if (element.length === 0) {
        throw new AppError('Fields cannot be null')
      }
    })

    if (image !== recipe.image) {
      await this.storageProvider.deleteFile(recipe.image)
    }

    recipe.name = name
    recipe.image = image
    recipe.ingredients = ingredients
    recipe.mode_prepare = mode_prepare
    recipe.time = time

    await this.recipesRepository.save(recipe)

    return recipe
  }
}

export default UpdateRecipeService
