

import { test, type Locator } from "@playwright/test";

test("Mouse Operations", async ({ page }) => {
    const url: string = process.env.URL!;
    await page.goto(url);

    console.log(process.env.APP_USERNAME);
    console.log(process.env.PASSWORD);


});
