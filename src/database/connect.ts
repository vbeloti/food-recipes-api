import { createConnection } from 'typeorm'
import connection from '../config/connection'

createConnection(connection).then(() => console.log('Succesfully connected with database'))
