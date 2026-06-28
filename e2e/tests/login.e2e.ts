import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import { credentials, loginScenarios } from '../test-data/credentials';

describe('Authentication flows', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();

  it('smoke: valid login', async () => {
    await loginPage.loginWith(credentials.validEmail, credentials.validPassword);
    await productPage.expectProductsScreenVisible();
  });

  it('regression: invalid login', async () => {
    await loginPage.loginWith(credentials.invalidEmail, credentials.invalidPassword);
    await loginPage.expectErrorVisible();
  });

  it.each(loginScenarios)('data-driven login: $scenarioName', async ({ email, password, expectedOutcome }) => {
    await loginPage.loginWith(email, password);

    if (expectedOutcome === 'success') {
      await productPage.expectProductsScreenVisible();
    } else {
      await loginPage.expectErrorVisible();
    }
  });
});
