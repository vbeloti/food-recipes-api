import AppError from '../errors/AppError'
import IRecipesRepository from '../repositories/IRecipesRepository'

class ShowRecipeService {
  constructor (private recipesRepository: IRecipesRepository) { }

  public async execute (id: string) {
    try {
      const recipe = await this.recipesRepository.findById(id)
      return recipe
    } catch (error) {
      throw new AppError('This recipe does not exists')
    }
  }
}

export default ShowRecipeService
