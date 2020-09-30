import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

const configDB = {
  host: process.env.HOST_DB || 'localhost',
  user: process.env.USERNAME_DB || 'postgres',
  port: process.env.PORT_DB || 5433,
  password: process.env.PASSWORD_DB || 'docker',
  database: process.env.DATABASE_DB || 'food-recipes-api'
}

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: configDB.host,
  port: configDB.port as number | undefined,
  username: configDB.user,
  password: configDB.password,
  database: configDB.database,
  entities: [
    join(__dirname, '../app/models/*{.ts,.js}')
  ],
  migrations: [
    join(__dirname, '../database/migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: '../database/migrations'
  }
}

export { connectionOptions, configDB }
