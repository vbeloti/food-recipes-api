import { Request, Response } from 'express'

class RecipeController {
  async store (req: Request, res: Response) {
    const { name, email, password } = req.body

    return res.json({ ok: true })
  }
}

export default RecipeController
