import { Page } from '@playwright/test';

export default class LoginPageElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  usernameField() {
    return this.page.locator('#username'); // Replace with the actual selector for the username field
  }

  passwordField() {
    return this.page.locator('#password'); // Replace with the actual selector for the password field
  }

  loginButton() {
    return this.page.locator('#login-button'); // Replace with the actual selector for the login button
  }
}
