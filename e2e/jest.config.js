module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/tests/**/*.e2e.ts'],
  setupFilesAfterEnv: ['<rootDir>/e2e/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testTimeout: 180000,
  verbose: true,
};
