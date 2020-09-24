import User from '../models/User'
import removePassword from './removePassword'

const makeFakeAccount = (): User => ({
  id: 'valid_id',
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password',
  created_at: new Date(2020, 9, 24),
  updated_at: new Date(2020, 9, 24)
})

describe('removePassword', () => {
  test('Shout be remove password from User', () => {
    const sut = removePassword(makeFakeAccount())

    const userWithourPass = {
      id: 'valid_id',
      name: 'any_name',
      email: 'any_email@mail.com',
      created_at: new Date(2020, 9, 24),
      updated_at: new Date(2020, 9, 24)
    }

    expect(sut).toEqual(userWithourPass)
  })
})
