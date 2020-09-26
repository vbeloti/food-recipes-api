import DiskStorageAdapter from './disk-storage-adapter'
import fs from 'fs'
import path from 'path'
import { tmpFolder } from '../../config/upload'

describe('DiskStorageAdapter', () => {
  test('Should be able do delete a file', async () => {
    const filePath = path.resolve(tmpFolder, 'test.txt')
    const diskStorageAdapter = new DiskStorageAdapter()

    fs.writeFile(filePath, 'teste', (err) => { if (err) return null })

    await diskStorageAdapter.deleteFile(filePath)

    try {
      await fs.promises.stat(filePath)
    } catch (e) {
      expect(e.code).toEqual('ENOENT')
    }
  })

  test('Should be able do delete a file on catch', async () => {
    const filePath = path.resolve(tmpFolder, 'test.txt')
    try {
    } catch {
      expect(await fs.promises.stat(filePath)).toBeNull()
    }
  })
})
