import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

describe('Cart flows', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  it('smoke: add product to cart', async () => {
    await productPage.addFirstProductToCart();
    await productPage.openCart();
    await cartPage.expectCartHasItem();
  });

  it('regression: remove product from cart', async () => {
    await productPage.addFirstProductToCart();
    await productPage.openCart();
    await cartPage.removeFirstItem();
    await cartPage.expectCartEmpty();
  });
});
