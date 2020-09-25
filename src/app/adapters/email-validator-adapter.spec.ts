import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailValidatorAdapter', () => {
  test('Should be able to return a valid email', async () => {
    const emailValidatorAdapter = new EmailValidatorAdapter()

    const email = emailValidatorAdapter.isValid('any_email@mail.com')

    expect(email).toBeTruthy()
  })

  test('Should be able to return a invalid email', async () => {
    const emailValidatorAdapter = new EmailValidatorAdapter()

    const email = emailValidatorAdapter.isValid('any_email@com')

    expect(email).toBeFalsy()
  })
})
