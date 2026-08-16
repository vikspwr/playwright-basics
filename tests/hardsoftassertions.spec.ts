import {expect, test, type Locator} from '@playwright/test'

test("hard assertions",async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

await page.locator("input#username").fill("dips@gmail.com");
await page.locator("input#password").fill("1234567");

await page.locator("input#signInBtn").click();

const validationMsg:Locator = page.locator("[style*='block;']");

console.log("This line should execute before assertion");
await expect(validationMsg).toHaveText("Incorrect username/password.");
console.log("This line should execute after assertion");


} )

test("soft assertions",async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

await page.locator("input#username").fill("dips@gmail.com");
await page.locator("input#password").fill("1234567");

await page.locator("input#signInBtn").click();

const validationMsg:Locator = page.locator("[style*='block;']");

console.log("This line should execute before assertion");
await expect.soft(validationMsg).toHaveText("Incorrect username/password.");
console.log("This line should execute after assertion");


} )


