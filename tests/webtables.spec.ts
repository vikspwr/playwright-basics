import { test, type Locator } from '@playwright/test'

test('Handling web tables in playwright', async ({ page }) => {

    const baseURL: string = "https://vinothqaacademy.com/webtable/";
    await page.goto(baseURL);

    const numberOfRows: Locator = page.locator("table#myTable tbody tr");

    console.log("Number of Rows =", await numberOfRows.count());

    const numberOfColumns: Locator = page.locator("table#myTable tbody tr:first-child td");

    console.log("Number of Columns =", await numberOfColumns.count());

    for (let row = 0; row < await numberOfRows.count(); row++) {

        for (let column = 1; column < await numberOfColumns.count(); column++) {

            let cellText: string | null = await numberOfRows.nth(row).locator("td").nth(column).textContent();

            console.log(cellText);

            if (cellText === "david.martinez@example.com") {

                numberOfRows.nth(row).locator("td").first().locator("input[type='checkbox']").click();
                // await page.waitForTimeout(3000);

            }

        }

        console.log();

    }




})