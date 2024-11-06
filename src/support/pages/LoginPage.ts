import { Page } from '@playwright/test';
import LoginPageElements from '../elements/LoginPageElements';

export default class LoginPage {
  private page: Page;
  private elements: LoginPageElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new LoginPageElements(page);
  }

  async navigate() {
    await this.page.goto(
      'https://magento.softwaretestingboard.com/customer/account/login/'
    );
  }

  async login(username: string, password: string) {
    await this.elements.usernameField().fill(username);
    await this.elements.passwordField().fill(password);
    await this.elements.loginButton().click();
  }
}
