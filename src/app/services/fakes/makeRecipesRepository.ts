import IRecipesRepository from '../../repositories/IRecipesRepository'
import Recipe from '../../models/Recipe'
import ICreateRecipe from '../../providers/ICreateRecipe'

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
    const index = this.recipes.findIndex(recipe => recipe.id !== id)
    this.recipes.splice(index, 1)
  }
}

export default FakeRecipesRepository
