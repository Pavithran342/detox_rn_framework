import { element, by, expect } from 'detox';

export default class CheckoutPage {
  private selectors = {
    addressInput: by.id('checkoutAddressInput'),
    cardInput: by.id('checkoutCardInput'),
    placeOrderButton: by.id('checkoutPlaceOrderButton'),
    successMessage: by.id('checkoutSuccessMessage'),
  };

  async fillShippingInformation(address: string, cardNumber: string) {
    await element(this.selectors.addressInput).replaceText(address);
    await element(this.selectors.cardInput).replaceText(cardNumber);
  }

  async placeOrder() {
    await element(this.selectors.placeOrderButton).tap();
  }

  async expectSuccessMessageVisible() {
    await expect(element(this.selectors.successMessage)).toBeVisible();
  }
}
