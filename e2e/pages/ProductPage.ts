import { element, by, expect } from 'detox';

export default class ProductPage {
  private selectors = {
    productsScreen: by.id('productsScreen'),
    firstProduct: by.id('productItem'),
    addToCartButton: by.id('addToCartButton'),
    cartButton: by.id('cartButton'),
  };

  async expectProductsScreenVisible() {
    await expect(element(this.selectors.productsScreen)).toBeVisible();
  }

  async addFirstProductToCart() {
    await element(this.selectors.firstProduct).tap();
    await element(this.selectors.addToCartButton).tap();
  }

  async openCart() {
    await element(this.selectors.cartButton).tap();
  }
}
