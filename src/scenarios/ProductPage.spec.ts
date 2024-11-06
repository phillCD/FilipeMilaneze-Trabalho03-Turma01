import { test, expect } from '@playwright/test';
import ProductPage from '../support/pages/ProductPage';

test.describe('Product Page Tests', () => {
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await productPage.navigate();
  });

  test('should display product details', async () => {
    const productName = await productPage.getProductName();
    expect(productName).toBe('Overnight Duffle'); // Replace with the actual product name
  });

  test('should add product to cart', async () => {
    await productPage.addToCart();
    const cartItemCount = await productPage.getCartItemCount();
    expect(cartItemCount).toBe(1);
  });
});
