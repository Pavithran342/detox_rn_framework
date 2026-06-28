import { element, by, expect } from 'detox';

export default class CartPage {
  private selectors = {
    cartItem: by.id('cartItem'),
    removeButton: by.id('removeItemButton'),
    checkoutButton: by.id('checkoutButton'),
    emptyCartMessage: by.id('emptyCartMessage'),
  };

  async expectCartHasItem() {
    await expect(element(this.selectors.cartItem)).toExist();
  }

  async removeFirstItem() {
    await element(this.selectors.removeButton).tap();
  }

  async tapCheckout() {
    await element(this.selectors.checkoutButton).tap();
  }

  async expectCartEmpty() {
    await expect(element(this.selectors.emptyCartMessage)).toBeVisible();
  }
}
