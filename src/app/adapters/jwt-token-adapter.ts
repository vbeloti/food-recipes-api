import { sign, verify } from 'jsonwebtoken'
import ITokenProvider from '../providers/ITokenProvider'

export default class JwtTokenAdapter implements ITokenProvider {
  public async generateToken (payload: string | object, secret: string, expiresIn: object): Promise<string> {
    return sign(payload, secret, expiresIn)
  }

  public async verifyToken (token: string, secret: string): Promise<string | object> {
    return verify(token, secret)
  }
}
