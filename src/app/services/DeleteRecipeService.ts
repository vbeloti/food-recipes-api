import AppError from '../errors/AppError'
import IStorageProvider from '../providers/IStorageProvider'
import IRecipesRepository from '../repositories/IRecipesRepository'

interface Request {
  recipe_id: string;
}

class DeleteRecipeService {
  constructor (private recipesRepository: IRecipesRepository, private storageProvider: IStorageProvider) { }

  public async execute ({ recipe_id }: Request) {
    const recipe = await this.recipesRepository.findById(recipe_id)

    if (!recipe) {
      throw new AppError('This recipes does not exists')
    }

    await this.storageProvider.deleteFile(recipe.image)

    await this.recipesRepository.delete(recipe_id)
  }
}

export default DeleteRecipeService
