import { test, expect } from '@playwright/test';

test('Home page should display text', async ({page}) => {
  await page.goto('/');

  const textElement = await page.locator('text=sdfsdf');
  await expect(textElement).toBeVisible();
});
