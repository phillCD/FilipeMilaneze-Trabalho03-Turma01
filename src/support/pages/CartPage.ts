import { Page } from '@playwright/test';
import CartPageElements from '../elements/CartPageElements';

export default class CartPage {
  private page: Page;
  private elements: CartPageElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new CartPageElements(page);
  }

  async navigate() {
    await this.page.goto(
      'https://magento.softwaretestingboard.com/checkout/cart/'
    );
  }

  async getCartItems() {
    return this.elements.cartItemSelector().elementHandles();
  }

  async proceedToCheckout() {
    await this.elements.showCartButton().click();
    await this.elements.proceedToCheckoutButtonSelector().click();
  }
}
