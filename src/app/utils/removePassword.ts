import User from '../models/User'

export interface IUserWithoutPassword {
  id: string;
  name: string;
  email: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

export default function removePassword (user: User): IUserWithoutPassword {
  const userWithoutPassowrd: IUserWithoutPassword = { ...user }

  delete userWithoutPassowrd.password

  return userWithoutPassowrd
}
