module.exports = {
  type: process.env.TYPE_DB || 'postgres',
  host: process.env.HOST_DB || 'localhost',
  port: process.env.PORT_DB || 5433,
  username: process.env.USERNAME_DB || 'postgres',
  password: process.env.PASSWORD_DB || 'docker',
  database: process.env.DATABASE_DB || 'food-recipes-api',
  entities: [
    './src/app/models/*.ts'
  ],
  migrations: [
    './src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
