import removePassword from '../utils/removePassword'
import AuthUserService from './AuthUserService'
import CreateUserService from './CreateUserService'
import EmailStub from './fakes/makeEmailProvider'
import HashStub from './fakes/makeHashProvider'
import TokenStub from './fakes/makeTokenProvider'
import FakeUsersRepository from './fakes/makeUsersRepository'

const makeFakeAccount = () => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

describe('AuthUserService', () => {
  test('Should to be return token with valid credentials', async () => {
    const usersRepository = new FakeUsersRepository()
    const hashProvider = new HashStub()
    const tokenProvider = new TokenStub()
    const emailProvider = new EmailStub()

    const sut = new AuthUserService(usersRepository, hashProvider, tokenProvider)
    const sutCreate = new CreateUserService(usersRepository, hashProvider, emailProvider)

    const user = await sutCreate.execute(makeFakeAccount())

    const httpResponse = await sut.execute({
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    expect(httpResponse).toHaveProperty('token')
    expect(httpResponse.user).toEqual(removePassword(user))
  })
})
