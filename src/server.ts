import 'reflect-metadata'
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import './database/connect'
import routes from './routes'
import AppError from './app/errors/AppError'
import { tmpFolder } from './config/upload'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(tmpFolder))
app.use(routes)

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

export default app
