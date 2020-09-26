import AppError from '../errors/AppError'
import CreateRecipeService from './CreateRecipeService'
import FakeRecipesRepository from './fakes/makeRecipesRepository'

describe('CreateRecipeService', () => {
  test('Should be able return error on recipe does not exists', async () => {
    const recipesRepository = new FakeRecipesRepository()

    const sut = new CreateRecipeService(recipesRepository)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    const recipe = await sut.execute(request)

    expect(recipe).toHaveProperty('id')
    expect(recipe.user_id).toBe('any_id')
  })

  test('Should be able return error on recipe filed is empty', async () => {
    const recipesRepository = new FakeRecipesRepository()

    const sut = new CreateRecipeService(recipesRepository)

    const request = {
      name: '',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await expect(sut.execute(request)).rejects.toBeInstanceOf(AppError)
  })
})
