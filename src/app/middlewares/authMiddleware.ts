import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import AppError from '../errors/AppError'

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware (
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const [, token] = authorization.split(' ')

  try {
    const data = jwt.verify(token, 'secret')

    const { id } = data as TokenPayload

    req.userId = id

    return next()
  } catch {
    throw new AppError('Invalid JWT token', 401)
  }
}
