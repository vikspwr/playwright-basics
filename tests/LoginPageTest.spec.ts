import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test.describe("@all Login Page Verification", () => {

    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.navigateToApplication("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    })


    test("Verify Login Functionality with valid credentials", { tag: "@smoke" }, async ({ page }) => {

        await test.step("Login to Application Assertion", async () => {
            await loginPage.loginToApplication("Admin", "admin123");

        })

    });

    test("@sanity Verify Forgot Password Link Existence", async ({ page }) => {

        await test.step("Fogot Password Assertion", async () => {
            const flag: boolean = await loginPage.isForgotPasswordLinkVisible();

            expect(flag).toBeTruthy();

        })


    });

    test("@regression Verify Login Page title", async ({ page }) => {

        await test.step("Login Page Title Assertion", async () => {

            let pageTitle: string = await loginPage.getLoginPageTitle();

            await expect(page).toHaveTitle(pageTitle);
        })


    })


})

