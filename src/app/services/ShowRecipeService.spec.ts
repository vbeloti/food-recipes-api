import AppError from '../errors/AppError'
import FakeRecipesRepository from './fakes/makeRecipesRepository'
import ShowRecipeService from './ShowRecipeService'

describe('ShowRecipeService', () => {
  test('Should be able to return one recipe', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const sut = new ShowRecipeService(recipesRepository)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    const recipe = await recipesRepository.create(request)

    const httpResponse = await sut.execute(recipe.id)

    expect(httpResponse).toHaveProperty('id')
  })

  test('Should be able to return error on recipe is not exist', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const sut = new ShowRecipeService(recipesRepository)

    jest.spyOn(recipesRepository, 'findById').mockReturnValueOnce(new Promise((resolve, reject) => reject(new AppError('This recipe does not exists'))))

    try {
      await sut.execute('invalid_id')
      await recipesRepository.findById('invalid_id')
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
    }
  })
})
