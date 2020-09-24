import { EmailValidator } from '../../providers/EmailValidator'

class EmailStub implements EmailValidator {
  isValid (email: string): boolean {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }
}

export default EmailStub
