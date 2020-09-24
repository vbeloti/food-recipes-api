import AppError from '../errors/AppError'
import CreateUserService from './CreateUserService'
import makeHashProvider from './fakes/makeHashProvider'
import makeUsersRepository from './fakes/makeUsersRepository'

const makeFakeAccount = () => ({
  id: 'valid_id',
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

describe('CreateUserService', () => {
  test('Should do not create user with email duplicated', async () => {
    const usersRepository = makeUsersRepository()
    const hashProvider = makeHashProvider()

    const sut = new CreateUserService(usersRepository, hashProvider)

    await sut.execute(makeFakeAccount())

    await expect(sut.execute(makeFakeAccount())).rejects.toBeInstanceOf(AppError)
  })

  test('Should be able to create a new user', async () => {
    const usersRepository = makeUsersRepository()
    const hashProvider = makeHashProvider()

    const sut = new CreateUserService(usersRepository, hashProvider)

    const user = await sut.execute(makeFakeAccount())

    expect(user).toHaveProperty('id')
  })
})
