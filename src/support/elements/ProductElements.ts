import { Page } from '@playwright/test';

export default class ProductElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productSelector() {
    return this.page.locator('text=Overnight Duffle'); // Replace with the actual selector for the product
  }

  addToCartButtonSelector() {
    return this.page.locator('#product-addtocart-button'); // Replace with the actual selector for the add to cart button
  }

  productNameSelector() {
    return this.page.locator('.product-name-selector'); // Replace with the actual selector for product name
  }

  cartItemCountSelector() {
    return this.page.locator('.cart-item-count-selector'); // Replace with the actual selector for cart item count
  }
}
