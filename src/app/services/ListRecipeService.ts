import AppError from '../errors/AppError'
import IRecipesRepository from '../repositories/IRecipesRepository'

class ListRecipeService {
  constructor (private recipesRepository: IRecipesRepository) { }

  public async execute () {
    const recipes = await this.recipesRepository.findAll()

    if (recipes.length === 0) {
      throw new AppError('Does not exists recipes registered')
    }

    return recipes
  }
}

export default ListRecipeService
