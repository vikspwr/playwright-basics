import { expect, test, type Locator } from '@playwright/test'
import data from '../loginData.json' with {type: "json"}


data.forEach((data, index) => {

    test(`Login Functionality ${index + 1}`, async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const userNameField: Locator = page.locator("input[name='username']");
        const passwordField: Locator = page.locator("input[name = 'password']");
        const loginButton: Locator = page.locator("button[type = 'submit']");

        const successFulLogin: Locator = page.getByRole("heading", { name: "Dashboard" });
        const invalidUserNamePassword: Locator = page.locator("p", { hasText: "Invalid credentials" });
        const emptyCreds: Locator = page.locator("span", { hasText: "Required" }).first();

        await userNameField.clear();
        await userNameField.fill(data.username);
        await passwordField.clear();
        await passwordField.fill(data.password);

        await loginButton.click();

        // Verification or Assertion
        await test.step("Assertions - Login", async () => {
            if (data.expected_result === 'PASS' && data.scenario === "valid") {
                await expect(successFulLogin).toBeVisible();
            }
            else if (data.expected_result === 'FAIL' && data.scenario === "invalid") {
                await expect(invalidUserNamePassword).toBeVisible();
            }
            else {
                await expect(emptyCreds).toBeVisible();
            }
        });
    })

})
