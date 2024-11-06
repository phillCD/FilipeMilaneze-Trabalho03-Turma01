import { Page } from '@playwright/test';

export default class CartPageElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  cartItemSelector() {
    return this.page.locator('.cart-item-selector'); // Replace with the actual selector for cart items
  }

  proceedToCheckoutButtonSelector() {
    return this.page.locator('text=Proceed to Checkout'); // Replace with the actual selector for the proceed to checkout button
  }

  showCartButton() {
    return this.page.locator('.showcart'); // Replace with the actual selector for the show cart button
  }
}
