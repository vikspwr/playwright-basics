

///  We can execute playwright script in two ways

import { chromium, type Browser, type Page } from "@playwright/test";

// Using Playwright runners
// Using IIFE   (acts like main method)

// way 2 - Using IIFE


/* (async () => {

    let browser: Browser = await chromium.launch({ channel: 'chrome', headless: false });
    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');

    let title: string = await page.title();
    console.log('title of the google page is', title);


    let url: string = page.url();
    console.log('url of the google page is', url);

    await page.waitForTimeout(2000);

    browser.close();


})();
 */
/* 
(async () => {

    let browser: Browser = await chromium.launch({ channel: 'chrome', headless: false });
    let page: Page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    let title: string = await page.title();
    console.log('title of the google page is', title);


    let url: string = page.url();
    console.log('url of the google page is', url);

    await page.waitForTimeout(2000);

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('span.checkmark').last().click();
    await page.locator('#okayBtn').click();
    await page.locator('select.form-control').selectOption('teach');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();


    page.waitForTimeout(2000);
    browser.close();


})();





 */