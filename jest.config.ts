import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/app/**/{page,layout}.{ts,tsx,js,jsx}*',
    '!src/**/types.ts',
    '!src/**/*.d.ts',
    '!src/**/*/index.ts',
    '!src/**/*.stories.tsx',
    '!src/shared/**/*',
    '!src/api/**/client.ts',
  ],
};

export default createJestConfig(config);
