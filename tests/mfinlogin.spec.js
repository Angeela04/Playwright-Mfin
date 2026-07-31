import { test, expect } from '@playwright/test';

test('MFIN Login @mfinlogin', async ({ page }) => {
  await page.goto('http://localhost:8080/synergy/faces/login.xhtml;jsessionid=6fca70cbbf489f04c75ad9e2e79d');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('p01');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Cbb@2015');
  await page.getByRole('button', { name: 'Login' }).click();
   // ✅ This is the real check — login only "passes" if this message shows up
  await expect(page.locator('#approveMessage_container').getByText('Sucessfully logged in')).toBeVisible();
});






