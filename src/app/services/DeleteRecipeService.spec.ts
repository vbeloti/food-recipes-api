import AppError from '../errors/AppError'
import DeleteRecipeService from './DeleteRecipeService'
import FakeRecipesRepository from './fakes/makeRecipesRepository'
import StorageStub from './fakes/makeStorageProvider'

describe('DeleteRecipeService', () => {
  test('Should be able return error on invalid id', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()

    const sut = new DeleteRecipeService(recipesRepository, storageProvider)

    await expect(sut.execute({ recipe_id: 'invalid' })).rejects.toBeInstanceOf(AppError)
  })

  test('Should be able to verify image exists', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()
    const sut = new DeleteRecipeService(recipesRepository, storageProvider)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    const recipe = await recipesRepository.create(request)

    await sut.execute({ recipe_id: 'valid_id' })

    expect(recipe.image).toBe('any_image')
  })
})
