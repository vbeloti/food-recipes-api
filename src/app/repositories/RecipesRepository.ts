import { getRepository, Repository } from 'typeorm'

import IRecipesRepository from './IRecipesRepository'
import Recipe from '../models/Recipe'
import ICreateRecipe from '../providers/ICreateRecipe'

class RecipesRepository implements IRecipesRepository {
  private ormRepository: Repository<Recipe>;

  constructor () {
    this.ormRepository = getRepository(Recipe)
  }

  public async findAll (): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find()

    return recipes
  }

  public async findById (id: string): Promise<Recipe | undefined> {
    const recipe = await this.ormRepository.findOne(id)

    return recipe
  }

  public async create (userData: ICreateRecipe): Promise<Recipe> {
    const recipe = this.ormRepository.create(userData)

    await this.ormRepository.save(recipe)

    return recipe
  }

  public async save (recipe: Recipe): Promise<Recipe> {
    return this.ormRepository.save(recipe)
  }

  public async delete (id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}

export default RecipesRepository
