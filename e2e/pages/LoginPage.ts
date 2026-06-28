import { element, by, expect } from 'detox';

export default class LoginPage {
  private selectors = {
    emailInput: by.id('loginEmailInput'),
    passwordInput: by.id('loginPasswordInput'),
    loginButton: by.id('loginButton'),
    errorMessage: by.id('loginErrorMessage'),
  };

  async expectLoginFormVisible() {
    await expect(element(this.selectors.emailInput)).toBeVisible();
    await expect(element(this.selectors.passwordInput)).toBeVisible();
  }

  async enterEmail(email: string) {
    await element(this.selectors.emailInput).typeText(email);
  }

  async enterPassword(password: string) {
    await element(this.selectors.passwordInput).replaceText(password);
  }

  async tapLogin() {
    await element(this.selectors.loginButton).tap();
  }

  async loginWith(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.tapLogin();
  }

  async expectErrorVisible() {
    await expect(element(this.selectors.errorMessage)).toBeVisible();
  }
}
