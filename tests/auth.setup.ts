import { expect, test as setup, type Locator } from '@playwright/test'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Login Authentication', async ({ page }) => {

    const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    await page.goto(baseURL);

    const usernameField: Locator = page.getByPlaceholder("Username");
    const passwordField: Locator = page.getByPlaceholder("Password");
    const loginButton: Locator = page.getByRole('button', { name: "Login" });
    const dashboardLabel: Locator = page.getByRole('heading', { name: "Dashboard" });

    await usernameField.clear();
    await usernameField.fill("Admin");
    await passwordField.clear();
    await passwordField.fill("admin123");
    await loginButton.click();

    await dashboardLabel.waitFor();

    await expect(dashboardLabel).toBeVisible();

    await page.context().storageState({ path: authFile })



})