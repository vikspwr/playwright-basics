

import { test, type Locator } from '@playwright/test'

test("Iterating elements - using all()", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    const products: Locator = page.locator("h4.product-name");

    for (let product of await products.allTextContents()) {
        console.log(product.toUpperCase());
    }

})

test("Iterating elements - using allTextContent()", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    const products: Locator = page.locator("h4.product-name");

    for (let product of await products.all()) {
        console.log(await product.textContent());
    }

})

test("Iterating elements - For loop", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    const products: Locator = page.locator("h4.product-name");

    for (let i = 0; i < await products.count(); i++) {

        console.log(await products.nth(i).textContent());

        if (await products.nth(i).textContent() === 'Mango - 1 Kg') {

            await page.locator("div.product button").nth(i).click();
            break;

        }
    }

    await page.waitForTimeout(10000);

})


