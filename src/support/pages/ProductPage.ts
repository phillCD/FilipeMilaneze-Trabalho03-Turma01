import { Page } from '@playwright/test';
import ProductElements from '../elements/ProductElements';

export default class ProductPage {
  private page: Page;
  private elements: ProductElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new ProductElements(page);
  }

  async navigate() {
    await this.page.goto(
      'https://magento.softwaretestingboard.com/gear/bags.html'
    );
  }

  async addToCart() {
    await this.elements.productSelector().click();
    await this.elements.addToCartButtonSelector().click();
  }

  async getProductName() {
    return this.elements.productNameSelector().textContent();
  }

  async getCartItemCount() {
    return parseInt(
      await this.elements.cartItemCountSelector().textContent(),
      10
    );
  }
}
