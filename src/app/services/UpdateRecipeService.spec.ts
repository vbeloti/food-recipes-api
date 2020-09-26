import AppError from '../errors/AppError'
import FakeRecipesRepository from './fakes/makeRecipesRepository'
import StorageStub from './fakes/makeStorageProvider'
import UpdateRecipeService from './UpdateRecipeService'

describe('UpdateRecipeService', () => {
  test('Should be able return error on recipe does not exists', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()

    const sut = new UpdateRecipeService(recipesRepository, storageProvider)

    const request = {
      recipe_id: 'any_id',
      name: 'any_name',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await expect(sut.execute(request)).rejects.toBeInstanceOf(AppError)
  })

  test('Should be able return error on recipe filed is empty', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()

    const sut = new UpdateRecipeService(recipesRepository, storageProvider)

    const request = {
      recipe_id: 'any_id',
      name: '',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await expect(sut.execute(request)).rejects.toBeInstanceOf(AppError)
  })

  test('Should be able to verify image exists', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()
    const sut = new UpdateRecipeService(recipesRepository, storageProvider)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    const recipe = await recipesRepository.create(request)

    const fakeRecipe = {
      recipe_id: recipe.id,
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await sut.execute(fakeRecipe)

    expect(recipe.image).toBe('any_image')
  })

  test('Should be able return error on recipe filed is empty', async () => {
    const recipesRepository = new FakeRecipesRepository()
    const storageProvider = new StorageStub()
    const sut = new UpdateRecipeService(recipesRepository, storageProvider)

    const request = {
      name: 'any_name',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    const recipe = await recipesRepository.create(request)

    const fakeRecipe = {
      recipe_id: recipe.id,
      name: '',
      user_id: 'any_id',
      image: 'any_image',
      ingredients: 'any_ingredients',
      mode_prepare: 'any_mode_prepare',
      time: 'any_time'
    }

    await expect(sut.execute(fakeRecipe)).rejects.toBeInstanceOf(AppError)
  })
})
