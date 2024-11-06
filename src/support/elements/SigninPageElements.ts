import { Page } from '@playwright/test';

export default class SignInPageElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  emailField() {
    return this.page.locator('#email'); // Replace with the actual selector for the email field
  }

  passwordField() {
    return this.page.locator('#pass'); // Replace with the actual selector for the password field
  }

  signInButton() {
    return this.page.locator('#send2'); // Replace with the actual selector for the sign-in button
  }
}
