import 'dotenv/config';

export const credentials = {
  validEmail: process.env.VALID_EMAIL || 'demo@example.com',
  validPassword: process.env.VALID_PASSWORD || 'Password123!',
  invalidEmail: process.env.INVALID_EMAIL || 'invalid@example.com',
  invalidPassword: process.env.INVALID_PASSWORD || 'WrongPassword123!',
};

export const loginScenarios = [
  {
    scenarioName: 'valid credentials',
    email: credentials.validEmail,
    password: credentials.validPassword,
    expectedOutcome: 'success',
  },
  {
    scenarioName: 'invalid credentials',
    email: credentials.invalidEmail,
    password: credentials.invalidPassword,
    expectedOutcome: 'error',
  },
];
