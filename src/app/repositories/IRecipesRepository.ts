import Recipe from '../models/Recipe'
import ICreateRecipe from '../providers/ICreateRecipe'

export default interface IRecipesRepository {
  findById (id: string): Promise<Recipe | undefined>;
  create(data: ICreateRecipe): Promise<Recipe>;
  findAll(): Promise<Recipe[]>;
  save(recipe: Recipe): Promise<Recipe>;
  delete(id: string): Promise<void>;
}
