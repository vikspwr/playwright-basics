
import { test, type BrowserContext, type Locator, type Page } from '@playwright/test'

// Total built-in fixture in playwright

// page
// context
// browser
// browserName
// request

/* test('Open multiple windows', async ({ browser }) => {

    const context1: BrowserContext = await browser.newContext();
    const page1: Page = await context1.newPage();

    await page1.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    console.log(page1.url());

    //await page1.waitForTimeout(3000);

    const context2: BrowserContext = await browser.newContext();
    const page2: Page = await context2.newPage();

    await page2.goto("https://rahulshettyacademy.com/AutomationPractice/");

    console.log(page2.url());

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

}); */

/* test('Open multiple tabs', async ({ browser }) => {

    const context: BrowserContext = await browser.newContext();
    const page1: Page = await context.newPage();

    await page1.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

    console.log(page1.url());

    const page2: Page = await context.newPage();

    await page2.goto("https://rahulshettyacademy.com/AutomationPractice/");

    console.log(page2.url());

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

}); */

/* test('Open browser in dark mode', async ({ browser }) => {

    const context: BrowserContext = await browser.newContext({ baseURL: "https://playwright.dev", colorScheme: "dark" });
    const page: Page = await context.newPage();

    await page.goto("/docs/test-fixtures#creating-a-fixture");

    console.log(page.url());


    await page.waitForTimeout(3000);


});
 */
test('Switch focus on another window/tab', async ({ browser }) => {

    const context: BrowserContext = await browser.newContext({ baseURL: "https://rahulshettyacademy.com", colorScheme: "dark" });
    const page: Page = await context.newPage();

    await page.goto("/seleniumPractise/#/");

    console.log(page.url());

    const topDealsLink: Locator = page.locator("a", { hasText: "Top Deals" });


    const newPageEvent = context.waitForEvent("page");
    const clickAction = topDealsLink.click();

    const [newPage] = await Promise.all([newPageEvent, clickAction]);

    console.log(newPage.url());

    await page.waitForTimeout(3000);


});