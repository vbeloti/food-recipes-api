import { createConnection } from 'typeorm'
import { connectionOptions } from '../config/connection'

createConnection(connectionOptions).then(() => console.log('Succesfully connected with database'))
