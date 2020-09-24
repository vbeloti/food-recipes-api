import IHashProvider from '../../providers/IHashProvider'

class HashStub implements IHashProvider {
  async generateHash (payload: string): Promise<string> {
    return new Promise(resolve => resolve('any_token'))
  }

  async compareHash (payload: string, hashed: string): Promise<boolean> {
    return new Promise(resolve => resolve(true))
  }
}

export default HashStub
