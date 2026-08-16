import { expect, test, type Locator } from "@playwright/test";

test("Mouse Operations", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  //const inputBox: Locator = page.getByPlaceholder("Search for Vegetables and Fruits", { exact: true });
  // await inputBox.click({ button: 'left' });
  // await inputBox.click({ button: 'right' });
  // const product:Locator = page.locator("div.product");
  //await product.first().hover();
  const greekart: Locator = page.getByText("GreenKart", { exact: true });
  await greekart.dblclick();
});

test("Mouse Operations 2", async ({ page }) => {
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  const lnk: Locator = page.getByRole("link", { name: "Register" });
  await lnk.click({ button: "middle" });

});

test("Mouse Operations 3", async ({ page }) => {
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  const lnk: Locator = page.getByRole("link", { name: "Register" });
  await lnk.click({ button: "middle" });


});
