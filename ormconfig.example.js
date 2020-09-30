module.exports = {
  type: process.env.TYPE_DB || 'TYPE',
  host: 'localhost',
  port: process.env.PORT_DB || 'PORT_NUMBER',
  username: process.env.USERNAME_DB || 'USERNAME',
  password: process.env.PASSWORD_DB || 'PASSWORD',
  database: process.env.DATABASE_DB || 'DATABASE',
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
