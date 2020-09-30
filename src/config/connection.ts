import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

const config = {
  host: process.env.HOST_DB,
  user: process.env.USERNAME_DB,
  port: process.env.PORT_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB
}

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: config.host || 'localhost',
  port: config.port as number | undefined || 5433,
  username: config.user || 'postgres',
  password: config.password || 'docker',
  database: config.database || 'food-recipes-api',
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

export = connectionOptions
