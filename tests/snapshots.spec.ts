import { test, type Locator } from "@playwright/test";

test("Taking Page Screenshot", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  await page.screenshot({ path: "./screenshots/page.png" });
});

test("Taking Element Screenshot", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  // const product:Locator = page.locator("div.product");
  const product = page.getByAltText("Brocolli - 1 Kg", { exact: true });

  await product.screenshot({ path: "./screenshots/element2.png" });
});

test("Taking Entire Page Screenshot", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  await page.screenshot({
    path: "./screenshots/entirePage.png",
    fullPage: true,
  });
});
