// Alerts or Dialog pop up handling

// Simple alert
// Confirmation alert
// Prompt alert

// Playwright handles the pop up automtically.

import { test, type Locator } from '@playwright/test'

test('Simple alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const simpleAlertButton: Locator = page.locator("button#alertBtn");
    await simpleAlertButton.click();

    await page.waitForTimeout(5000);

})

test('Confirmation alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const confirmationAlertButton: Locator = page.locator("button#confirmBtn");
    const promptAlertButton: Locator = page.locator("button#promptBtn");
    const alertResponseMessage: Locator = page.locator("p#demo");

    // page.on('dialog', async d => await d.accept());
    // page.on('dialog', async dialog => console.log(dialog.message()));

    page.on('dialog', async (popup) => {

        await popup.accept();
        console.log(popup.type());
        console.log(popup.message());

    })

    await confirmationAlertButton.click();
    console.log(await alertResponseMessage.textContent());

    await page.waitForTimeout(5000);


})

test('Prompt alert', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const promptAlertButton: Locator = page.locator("button#promptBtn");
    const alertResponseMessage: Locator = page.locator("p#demo");

    // page.on('dialog', async d => await d.accept());
    // page.on('dialog', async dialog => console.log(dialog.message()));

    page.on('dialog', async (popup) => {

        await popup.accept("Dipti M");
        console.log(popup.type());
        console.log(popup.message());

    })

    await promptAlertButton.click();
    console.log(await alertResponseMessage.textContent());

    await page.waitForTimeout(5000);


})