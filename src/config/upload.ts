import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import { Request, Express } from 'express'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import AppError from '../app/errors/AppError'
import dotenv from 'dotenv'
import { CredentialsOptions } from 'aws-sdk/lib/credentials'

dotenv.config()

export const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

const credentials:CredentialsOptions = {
  accessKeyId: process.env.AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_SECRET_KEY as string
}

aws.config.update({ credentials })

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, tmpFolder)
    },
    filename (req, file, cb) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`
      return cb(null, fileName)
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME as string,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const fileHash = crypto.randomBytes(10).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`
        return cb(null, fileName)
      })
    }
  })
}

export default {
  dest: tmpFolder,
  storage: storageTypes[process.env.STORAGE_TYPE as 'local' | 's3'],
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req: Request, file: Express.Multer.File, cb: (error: any, type?: boolean | undefined) => void) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new AppError('Invalid file type.'))
    }
  }
}
