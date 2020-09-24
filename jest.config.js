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
    '!<rootDir>/src/app/errors/*.ts'
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
