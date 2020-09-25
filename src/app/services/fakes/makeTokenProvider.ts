import ITokenProvider from '../../providers/ITokenProvider'

class TokenStub implements ITokenProvider {
  generateToken (payload: object, secret: string, expiresIn: object): Promise<string> {
    return new Promise(resolve => resolve('any_token'))
  }

  verifyToken (token: string, secret: string): Promise<string | object> {
    return new Promise(resolve => resolve('any_token'))
  }
}

export default TokenStub
