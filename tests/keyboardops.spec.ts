

import { test, expect, type Locator } from '@playwright/test'

test('keyboard ops', async ({ page }) => {

    await test.step('Navigate to Application', async () => {
        await page.goto("https://rahulshettyacademy.com/angularpractice/");
    })

    await test.step('Do some operations', async () => {
        const submitBtn: Locator = page.locator("input[type='submit']");

        await submitBtn.press("Enter");

        await expect(page.locator("div.alert-success strong")).toBeVisible();

        const firstName: Locator = page.locator("input[name='name']");

        await firstName.first().fill("Dipti Markande");

        await firstName.first().press("Control+a");
        await firstName.first().press("Control+c");

    })


    await test.step('Submit button', async () => {
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
    })


    await test.step('Assertion', async () => {
        const email: Locator = page.locator("input[name='email']");
        await email.press("Control+v");

        await email.press("Backspace", { delay: 4000 });

    })





})