import { test, expect } from '@playwright/test'

test('verify page title', async ({ page }) => {

  await page.goto('https://www.google.com');

  let title: string = await page.title();
  //console.log(title);

  expect(title).toBe('Google');

  //await page.waitForTimeout(10000);

});


test('verify page url', async ({ page }) => {

  await page.goto('https://www.google.com');
  let url: string = page.url();

  //console.log(url);

  expect(url).toBe('https://www.google.co');

  //await page.waitForTimeout(5000);

});

///  expect(actual).toBe(expected)