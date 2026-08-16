
import { test, expect, type Locator } from '@playwright/test'

test(`visual comparison`, async ({ page }) => {

    const myURL: string | undefined = process.env.URL!;
    await page.goto(myURL);

    await page.locator("input[name='email']").fill("difference");

    await expect(page).toHaveScreenshot('mypage.png');


});

