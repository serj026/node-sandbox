module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/**/*.(t|j)s',
    '!<rootDir>/**/*.module.ts',
    '!<rootDir>/**/*.provider.ts',
    '!<rootDir>/**/*.dto.ts',
    '!<rootDir>/**/*.entity.ts',
    '!<rootDir>/**/*.config.ts',
    '!<rootDir>/**/main.ts',
    '!<rootDir>/**/tracer.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node',
};
