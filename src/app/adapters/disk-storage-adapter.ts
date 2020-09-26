import { tmpFolder } from '../../config/upload'
import fs from 'fs'
import path from 'path'
import IStorageProvider from '../providers/IStorageProvider'

class DiskStorageAdapter implements IStorageProvider {
  public async deleteFile (file: string): Promise<void> {
    const filePath = path.resolve(tmpFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

export default DiskStorageAdapter
