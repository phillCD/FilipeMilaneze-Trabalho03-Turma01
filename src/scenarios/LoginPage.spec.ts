import { test, expect } from '@playwright/test';
import LoginPage from '../support/pages/LoginPage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully', async () => {
    await loginPage.login('testuser', 'password'); // Replace with actual credentials
    const pageTitle = await page.title();
    expect(pageTitle).toBe('My Account'); // Replace with the actual title after login
  });
});
