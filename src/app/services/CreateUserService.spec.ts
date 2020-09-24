import AppError from '../errors/AppError'
import CreateUserService from './CreateUserService'
import EmailStub from './fakes/makeEmailProvider'
import HashStub from './fakes/makeHashProvider'
import FakeUsersRepository from './fakes/makeUsersRepository'

const makeFakeAccount = () => ({
  id: 'valid_id',
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

describe('CreateUserService', () => {
  test('Should do not create user with invalid email', async () => {
    const usersRepository = new FakeUsersRepository()
    const hashProvider = new HashStub()
    const emailProvider = new EmailStub()

    const sut = new CreateUserService(usersRepository, hashProvider, emailProvider)

    const fakeAccountInvalidEmail = {
      name: 'any_name',
      email: 'invalid_email',
      password: 'any_password'
    }

    await expect(sut.execute(fakeAccountInvalidEmail)).rejects.toBeInstanceOf(AppError)
  })

  test('Should do not create user with email duplicated', async () => {
    const usersRepository = new FakeUsersRepository()
    const hashProvider = new HashStub()
    const emailProvider = new EmailStub()

    const sut = new CreateUserService(usersRepository, hashProvider, emailProvider)

    await sut.execute(makeFakeAccount())

    await expect(sut.execute(makeFakeAccount())).rejects.toBeInstanceOf(AppError)
  })

  test('Should be able to create a new user', async () => {
    const usersRepository = new FakeUsersRepository()
    const hashProvider = new HashStub()
    const emailProvider = new EmailStub()

    const sut = new CreateUserService(usersRepository, hashProvider, emailProvider)

    const user = await sut.execute(makeFakeAccount())

    expect(user).toHaveProperty('id')
  })
})
