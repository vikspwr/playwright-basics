import type { Locator, Page } from "@playwright/test";


export class LoginPage {

    // locators
    // constructor
    // actions

    // Locators section
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly forgotYourPwdLink: Locator;

    // Constructor section
    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
        this.forgotYourPwdLink = page.locator("p.orangehrm-login-forgot-header");
    }


    // Actions section
    async navigateToApplication(url: string) {
        await this.page.goto(url);
    }

    async loginToApplication(username: string, password: string) {

        await this.userNameInput.waitFor();
        await this.userNameInput.fill(username);
        await this.passwordInput.waitFor();
        await this.passwordInput.fill(password);
        await this.loginButton.waitFor();
        await this.loginButton.click();


    }

    async isForgotPasswordLinkVisible(): Promise<boolean> {
        await this.forgotYourPwdLink.waitFor();
        return await this.forgotYourPwdLink.isVisible();
    }

    async getLoginPageTitle(): Promise<string> {
        return await this.page.title();
    }





}