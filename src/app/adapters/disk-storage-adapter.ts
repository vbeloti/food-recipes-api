import fs from 'fs'
import path from 'path'
import aws from 'aws-sdk'

import IStorageProvider from '../providers/IStorageProvider'
import { tmpFolder } from '../../config/upload'
import { CredentialsOptions } from 'aws-sdk/lib/credentials'

const credentials: CredentialsOptions = {
  accessKeyId: process.env.AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_SECRET_KEY as string
}

const bucket = process.env.BUCKET_NAME as string

aws.config.update({ credentials })

const s3 = new aws.S3()

class DiskStorageAdapter implements IStorageProvider {
  public async deleteFile (file: string): Promise<void> {
    const filePath = path.resolve(tmpFolder, file)

    if (process.env.STORAGE_TYPE === 's3') {
      s3.deleteObject({ Bucket: bucket, Key: file }, (err) => {
        if (err) throw new Error('Erro ao apagar o arquivo')
        return null
      })
    }

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

export default DiskStorageAdapter
