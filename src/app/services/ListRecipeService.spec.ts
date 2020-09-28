import AppError from '../errors/AppError'
import FakeRecipesRepository from './fakes/makeRecipesRepository'
import ListRecipeService from './ListRecipeService'

describe('ListRecipeService', () => {
  test('Should be able to return recipes', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const sut = new ListRecipeService(recipesRepository)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await recipesRepository.create(request)

    const httpResponse = await sut.execute()

    expect(httpResponse[0]).toHaveProperty('name')
    expect(httpResponse[0]).toHaveProperty('user_id')
    expect(httpResponse[0]).toHaveProperty('image')
    expect(httpResponse[0]).toHaveProperty('ingredients')
    expect(httpResponse[0]).toHaveProperty('mode_prepare')
    expect(httpResponse[0]).toHaveProperty('time')
  })

  test('Should be able to return error on recipes is empty', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const sut = new ListRecipeService(recipesRepository)

    await expect(sut.execute()).rejects.toBeInstanceOf(AppError)
  })
})
