

import { test, expect, type Locator } from '@playwright/test'

// getByText , getByPlaceholder, getByLabel, getByRole, getByTitle, getByTestId, getByAltText

// data-testid

test('Get By Text', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const text: Locator = page.getByText("Practice Page", { exact: true });
    // const txtOnPage: string | null = await text.textContent();    
    //console.log(txtOnPage);

    await expect(text).toHaveText("Practice Page");

});

test('Get By Text 2', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const text: Locator = page.getByText("Total Amount", { exact: false });
    await expect(text).toHaveText("Total Amount Collected: 296");

});


test('Get By Placeholder', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const ph: Locator = page.getByPlaceholder("Enter Your", { exact: false });

    //await ph.fill("Dipti Markande");
    await ph.pressSequentially("Priyanka Ingole", { delay: 500 });

    console.log(await ph.inputValue());

    expect(await ph.inputValue()).toBe("Priyanka Ingole");

  //  await page.waitForTimeout(10000);

});


test('Get By Label', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");

    const remember: Locator = page.getByLabel("Remember my username", { exact: true });
    //await remember.click();
    await remember.check();
    const agree: Locator = page.getByLabel(" I agree to the", { exact: false });
    //await agree.click();
    await agree.check();
   // await page.waitForTimeout(5000);
    await remember.click();
    await agree.uncheck();
   // await page.waitForTimeout(6000);
});


test('Get By Role', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/locatorspractice/");

    const remember: Locator = page.getByRole("checkbox", { name: "Remember my username" });
    await remember.check();

    const agree: Locator = page.getByRole("checkbox", { name: "I agree to the", exact: false });
    await agree.click();


    //const btn: Locator = page.getByRole("button", { name: "SIGN IN" });
    //await btn.click();

    const lnk: Locator = page.getByRole("link", { name: "Forgot your password", exact: false });
    await lnk.click();

  //  await page.waitForTimeout(4000);

});



test('Get By Alt Text', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/practice");

    const logo: Locator = page.getByAltText("Rahul Shetty Academy", { exact: true });
    await expect(logo).toBeVisible();


});

test('Get By Title', async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/");

    const img: Locator = page.getByTitle("HYR", { exact: true });
    await expect(img).toBeVisible();


});

test('Get By Test Data ID', async ({ page }) => {

    await page.goto("https://www.letskodeit.com/practice");

    const chkbox: Locator = page.getByTestId("bmwcheck");
    await chkbox.click();
   // await page.waitForTimeout(4000);

});






