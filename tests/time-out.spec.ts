import { expect, test, type Locator } from '@playwright/test'

// Default test case time out -  30 sec

// Individual test time out - override - yes

// Assertion time out - default assertion time out - 5 sec


test('test time out', async ({ page }) => {

    test.setTimeout(30_000);  // individual test time out
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.waitForTimeout(41000);  // consider , my test case take 41 seconds to execute


});
test('Assertion time out', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    const nameLocator: Locator = page.locator("input[name='name']").first();

    await expect(nameLocator).toBeVisible({ timeout: 8000 }); // individual assertion time out

});

test('Navigation time out', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/", { timeout: 60000 });

});

test('Action time out', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/", { timeout: 60000 });
    const nameLocator: Locator = page.locator("input[name='name']").first();

    await nameLocator.click({ timeout: 5000 });

});