module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/database/**/*.ts',
    '!<rootDir>/src/@types/*.ts',
    '!<rootDir>/src/app/models/**/*.ts',
    '!<rootDir>/src/app/services/fakes/*.ts',
    '!<rootDir>/src/app/middlewares/*.ts',
    '!<rootDir>/src/app/repositories/*.ts',
    '!<rootDir>/src/app/controllers/*.ts',
    '!<rootDir>/src/app/adapters/*.ts',
    '!<rootDir>/src/app/errors/*.ts',
    '!<rootDir>/src/app/config/*.ts',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/routes.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/config/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
