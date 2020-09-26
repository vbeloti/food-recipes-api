import IStorageProvider from '../../providers/IStorageProvider'

class StorageStub implements IStorageProvider {
  async deleteFile (file: string): Promise<void> {
    return new Promise(resolve => resolve())
  }
}

export default StorageStub
