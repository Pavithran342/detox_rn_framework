import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout flows', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('regression: successful checkout', async () => {
    await productPage.addFirstProductToCart();
    await productPage.openCart();
    await cartPage.tapCheckout();
    await checkoutPage.fillShippingInformation('123 Main Street', '4111111111111111');
    await checkoutPage.placeOrder();
    await checkoutPage.expectSuccessMessageVisible();
  });
});
