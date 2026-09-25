import { expect, test, type Locator } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    await page.goto(baseURL);
})

test('PIM', async ({ page }) => {

    // PIM

    const PIMMenuItem: Locator = page.locator("ul.oxd-main-menu li:nth-child(2)");
    const addPIMButton = page.getByRole('button', { name: " Add " });
    const addEmployeeLink: Locator = page.getByRole('heading', { name: "Add Employee" });

    await PIMMenuItem.waitFor();
    await PIMMenuItem.click();

    await addPIMButton.waitFor();
    await addPIMButton.click();

    await addEmployeeLink.waitFor();
    expect(addEmployeeLink).toBeVisible();


})

test('Admin', async ({ page }) => {

    // PIM

    const adminMenuItem: Locator = page.locator("ul.oxd-main-menu li:nth-child(1)");
    const addAdminButton = page.getByRole('button', { name: " Add " });
    const addUserLabel: Locator = page.getByRole('heading', { name: "Add User" })


    await adminMenuItem.waitFor();
    await adminMenuItem.click();

    await addAdminButton.waitFor();
    await addAdminButton.click();

    await addUserLabel.waitFor();
    expect(addUserLabel).toBeVisible();


})