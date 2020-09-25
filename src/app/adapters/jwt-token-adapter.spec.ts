import JwtTokenAdapter from './jwt-token-adapter'

describe('JwtTokenAdapter', () => {
  test('Should be able to return a token', async () => {
    const jwtTokenAdapter = new JwtTokenAdapter()

    const token = await jwtTokenAdapter.generateToken({ id: 'valid_id' }, 'secret', { expiresIn: '7d' })

    expect(token).not.toBe({ id: 'valid_id' })
  })

  test('Should be able to compare a payload with token', async () => {
    const jwtTokenAdapter = new JwtTokenAdapter()

    const token = await jwtTokenAdapter.generateToken({ id: 'valid_id' }, 'secret', { expiresIn: '7d' })

    const compare = await jwtTokenAdapter.verifyToken(token, 'secret')

    expect(compare).toBeTruthy()
  })
})
