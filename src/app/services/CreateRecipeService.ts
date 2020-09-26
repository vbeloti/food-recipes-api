import AppError from '../errors/AppError'
import Recipe from '../models/Recipe'
import IRecipesRepository from '../repositories/IRecipesRepository'

interface Request {
  user_id: string;
  name: string;
  image: string;
  ingredients: string;
  mode_prepare: string;
  time: string;
}

class CreateRecipeService {
  constructor (private recipesRepository: IRecipesRepository) { }

  public async execute ({
    name,
    user_id,
    image,
    ingredients,
    mode_prepare,
    time
  }: Request): Promise<Recipe> {
    const data = [name, user_id, image, ingredients, mode_prepare]

    data.forEach((element) => {
      if (element.length === 0) {
        throw new AppError('Fields cannot be null')
      }
    })

    const recipe = await this.recipesRepository.create({
      name,
      image,
      ingredients,
      mode_prepare,
      time,
      user_id
    })

    return recipe
  }
}

export default CreateRecipeService
