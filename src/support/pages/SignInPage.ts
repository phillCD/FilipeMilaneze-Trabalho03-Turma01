import { Page } from '@playwright/test';
import SignInPageElements from '../elements/SigninPageElements';

export default class SignInPage {
  private page: Page;
  private elements: SignInPageElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new SignInPageElements(page);
  }

  async navigate() {
    await this.page.goto(
      'https://magento.softwaretestingboard.com/customer/account/login/'
    );
  }

  async signIn(email: string, password: string) {
    await this.elements.emailField().fill(email);
    await this.elements.passwordField().fill(password);
    await this.elements.signInButton().click();
  }
}
