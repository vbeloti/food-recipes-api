import BcryptHashAdapter from './bcrypt-hash-adapter'

describe('BcryptHashAdapter', () => {
  test('Should be able to return a hash', async () => {
    const bcryptHashAdapter = new BcryptHashAdapter()

    const hash = await bcryptHashAdapter.generateHash('any_password')

    expect(hash).not.toBe('any_password')
  })

  test('Should be able to compare a payload with hash', async () => {
    const bcryptHashAdapter = new BcryptHashAdapter()

    const hash = await bcryptHashAdapter.generateHash('any_password')

    const compare = await bcryptHashAdapter.compareHash('any_password', hash)

    expect(compare).toBeTruthy()
  })
})
