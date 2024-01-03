import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // Get email and password fields: 
  // const email = await page.getByPlaceholder('Email');

  // Fill them
  // email.fill("jhon@example.com");
  await page.fill('input[name="email"]', "jhon@example.com")

  // const password = await page.getByPlaceholder('Password');

  // password.fill("123456");

  await page.fill('input[name="password"]', "123456")

  // console.log("password", password)

  await page.getByRole('button', { name: 'login' }).click();

  const response = await page.waitForResponse(resp => resp.url().includes('/login') && resp.status() === 200);
  if (response.status() !== 200) throw "Error";

  // Expects page to have a heading with the name of Dashboard.  
  // await Promise.all([
  //   page.waitForResponse(resp => resp.url().includes('/login') && resp.status() === 200),

  // ]);

  await page.waitForURL('**/dashboard');

  await expect(page).toHaveTitle("Dashboard")
});
