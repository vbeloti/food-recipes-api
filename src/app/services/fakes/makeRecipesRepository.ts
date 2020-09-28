import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../models/Recipe'
import ICreateRecipe from '../../providers/ICreateRecipe'
import AppError from '../../errors/AppError'

class FakeRecipesRepository implements IRecipesRepository {
  private recipes: Recipe[] = [];

  public async findById (id: string): Promise<Recipe | undefined> {
    const findRecipe = this.recipes.find(recipe => recipe.id === id)
    return findRecipe
  }

  public async findAll (): Promise<Recipe[]> {
    return this.recipes
  }

  public async create (userData: ICreateRecipe): Promise<Recipe> {
    const recipe = new Recipe()

    Object.assign(recipe, { id: 'valid_id' }, userData)

    this.recipes.push(recipe)
    return recipe
  }

  public async save (recipe: Recipe): Promise<Recipe> {
    const findIndex = this.recipes.findIndex(findRecipe => findRecipe.id === recipe.id)

    this.recipes[findIndex] = recipe

    return recipe
  }

  public async delete (id: string): Promise<void> {
    this.recipes.find(recipe => recipe.id !== id)
  }
}

export default FakeRecipesRepository
