
import { test, type Locator } from '@playwright/test'
import testData from '../testData.json' with {type: "json"}

// Using for of loop
/* 
for (const data of testData) {

    test(`Data Driven Testing ${data.email}`, async ({ page }) => {

        const url: string = "https://rahulshettyacademy.com/angularpractice/";
        await page.goto(url);

        const firstName: Locator = page.locator("input[name = 'name']").first();
        const email: Locator = page.locator("input[name='email']");
        const password: Locator = page.locator("input#exampleInputPassword1");


        await firstName.pressSequentially(data.name, { delay: 200 });
        await email.pressSequentially(data.email, { delay: 200 });
        await password.pressSequentially(data.password, { delay: 200 });

    })

} */

// Using for each loop
testData.forEach((testData, index) => {

    test(`Data Driven Testing ${index + 1}`, async ({ page }) => {

        const url: string = "https://rahulshettyacademy.com/angularpractice/";
        await page.goto(url);

        const firstName: Locator = page.locator("input[name = 'name']").first();
        const email: Locator = page.locator("input[name='email']");
        const password: Locator = page.locator("input#exampleInputPassword1");


        await firstName.clear();
        await firstName.pressSequentially(testData.name, { delay: 200 });
        await email.clear();
        await email.pressSequentially(testData.email, { delay: 200 });
        await password.clear();
        await password.pressSequentially(testData.password, { delay: 200 });

    })

})

