

import { test } from '@playwright/test'

test.use({
    viewport: { width: 800, height: 500 },

});

test('maximize browser', async ({ page }) => {


    await page.goto("https://www.google.com");


    await page.waitForTimeout(5000);


})