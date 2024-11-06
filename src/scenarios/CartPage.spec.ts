import { test, expect } from '@playwright/test';
import CartPage from '../support/pages/CartPage';

test.describe('Cart Page Tests', () => {
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate();
  });

  test('should display items in cart', async () => {
    const cartItems = await cartPage.getCartItems();
    expect(cartItems.length).toBeGreaterThan(0);
  });

  test('should proceed to checkout', async () => {
    await cartPage.proceedToCheckout();
    const checkoutPageTitle = await page.title();
    expect(checkoutPageTitle).toBe('Checkout'); // Replace with the actual checkout page title
  });
});
