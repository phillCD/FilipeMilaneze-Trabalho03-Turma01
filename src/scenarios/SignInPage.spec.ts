import { test, expect } from '@playwright/test';
import SignInPage from '../support/pages/SignInPage';

test.describe('Sign In Page Tests', () => {
  let signInPage: SignInPage;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.navigate();
  });

  test('should sign in successfully', async () => {
    await signInPage.signIn('testuser@example.com', 'password'); // Replace with actual credentials
    const pageTitle = await page.title();
    expect(pageTitle).toBe('My Account'); // Replace with the actual title after sign-in
  });
});
