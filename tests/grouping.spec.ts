
import { test, expect, type Locator } from '@playwright/test'


test.describe('@sanity Login Functionality', () => {

    test('Login with valid credentials', async ({ page }) => {

        const myURL: string | undefined = process.env.URL!;
        await page.goto(myURL);

        await page.getByPlaceholder("Username").fill("Admin");
        await page.getByPlaceholder("Password").fill("admin123");

        await page.locator("button[type='submit']").click();
        const dashboardName: Locator = page.locator("h6.oxd-text--h6");
        await dashboardName.waitFor();

        await expect(page.locator("h6.oxd-text")).toBeVisible();


    });

    test('Login with invalid credentials', async ({ page }) => {

        const myURL: string | undefined = process.env.URL!;
        await page.goto(myURL);

        await page.getByPlaceholder("Username").fill("dgds");
        await page.getByPlaceholder("Password").fill("dgsdg");

        await page.locator("button[type='submit']").click();

        await expect(page.locator("p.oxd-alert-content-text")).toBeVisible();


    });

})

