import User from '../models/User'

type IUserWithoutPassword = Omit<User, 'password'>

export default function deletePassword (user: User): IUserWithoutPassword {
  const userWithoutPassowrd: IUserWithoutPassword = { ...user }

  delete userWithoutPassowrd.password

  return userWithoutPassowrd
}
