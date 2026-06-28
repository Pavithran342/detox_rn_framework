import { defineFeature, loadFeature } from 'jest-cucumber';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import { credentials } from '../test-data/credentials';

const feature = loadFeature('e2e/features/shopping.feature');

defineFeature(feature, (test) => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  test('Valid login', ({ given, when, then }) => {
    given('I launch the app', async () => {
      await loginPage.expectLoginFormVisible();
    });

    when('I log in with valid credentials', async () => {
      await loginPage.loginWith(credentials.validEmail, credentials.validPassword);
    });

    then('I should see the products screen', async () => {
      await productPage.expectProductsScreenVisible();
    });
  });

  test('Invalid login', ({ given, when, then }) => {
    given('I launch the app', async () => {
      await loginPage.expectLoginFormVisible();
    });

    when('I log in with invalid credentials', async () => {
      await loginPage.loginWith(credentials.invalidEmail, credentials.invalidPassword);
    });

    then('I should see an authentication error', async () => {
      await loginPage.expectErrorVisible();
    });
  });

  test('Add product to cart', ({ given, when, then }) => {
    given('I launch the app', async () => {
      await loginPage.expectLoginFormVisible();
    });

    when('I log in with valid credentials', async () => {
      await loginPage.loginWith(credentials.validEmail, credentials.validPassword);
    });

    when('I add the first product to the cart', async () => {
      await productPage.addFirstProductToCart();
    });

    then('I should see the product in the cart', async () => {
      await productPage.openCart();
      await cartPage.expectCartHasItem();
    });
  });

  test('Remove product from cart', ({ given, when, then }) => {
    given('I launch the app', async () => {
      await loginPage.expectLoginFormVisible();
    });

    when('I log in with valid credentials', async () => {
      await loginPage.loginWith(credentials.validEmail, credentials.validPassword);
    });

    when('I add the first product to the cart', async () => {
      await productPage.addFirstProductToCart();
    });

    when('I remove the product from the cart', async () => {
      await productPage.openCart();
      await cartPage.removeFirstItem();
    });

    then('I should see an empty cart message', async () => {
      await cartPage.expectCartEmpty();
    });
  });

  test('Successful checkout', ({ given, when, then }) => {
    given('I launch the app', async () => {
      await loginPage.expectLoginFormVisible();
    });

    when('I log in with valid credentials', async () => {
      await loginPage.loginWith(credentials.validEmail, credentials.validPassword);
    });

    when('I add the first product to the cart', async () => {
      await productPage.addFirstProductToCart();
    });

    when('I proceed to checkout', async () => {
      await productPage.openCart();
      await cartPage.tapCheckout();
      await checkoutPage.fillShippingInformation('123 Main Street', '4111111111111111');
      await checkoutPage.placeOrder();
    });

    then('I should see a success confirmation', async () => {
      await checkoutPage.expectSuccessMessageVisible();
    });
  });
});
