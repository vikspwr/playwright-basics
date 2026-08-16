

import { test, expect, type Locator } from '@playwright/test'

test('assertions in playwright', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName: Locator = page.locator("input#username");

    await expect(userName).toBeVisible();

    // await expect(userName).not.toBeVisible();

    await expect(userName).toBeEnabled();

    await expect(userName).toBeEditable();
    await expect(userName).toBeEmpty();

    await userName.fill("Priyanka");

    // await expect(userName).toBeEmpty();
    await expect(userName).not.toBeEmpty();

    const chkBox: Locator = page.locator("input#terms");

    await chkBox.check();
    await expect(chkBox).toBeChecked();

    expect(10).toBeCloseTo(10.004);   // Expected difference: < 0.005

    expect("Dipti Markande").toContain("Dipti");

})

