import { configDB } from './src/config/connection'
import { join } from 'path'

export = {
  type: 'postgres',
  host: configDB.host,
  port: configDB.port,
  username: configDB.user,
  password: configDB.password,
  database: configDB.database,
  entities: [
    join(__dirname, './src/app/models/*{.ts,.js}')
  ],
  migrations: [
    join(__dirname, './src/database/migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
