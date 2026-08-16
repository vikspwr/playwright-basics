
import { test, expect, type Locator } from '@playwright/test'

const userNames = ['Dipti', 'Priyanka', 'Amol', 'Sharda', 'Vikas'];

/* for (let u of userNames) {

  test(`Parametrization ${u}`, async ({ page }) => {

    const myURL: string | undefined = process.env.URL!;
    await page.goto(myURL);

    await page.getByPlaceholder("Username").pressSequentially(u, { delay: 200 });

    await page.waitForTimeout(3000);



  });

} */


userNames.forEach((u, idx) => {
  test(`Parametrization ${idx + 1}`, async ({ page }) => {

    const myURL: string = process.env.URL!;
    await page.goto(myURL);

    await page.getByPlaceholder("Username").pressSequentially(u, { delay: 200 });

    await page.waitForTimeout(3000);

  });


})
