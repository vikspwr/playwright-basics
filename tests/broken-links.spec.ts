// Broken Links - Link which returns client or server error response (4XX client errors or 5XX server errors series)


import { test, type Locator } from '@playwright/test'

test('Broken Links', async ({ page }) => {

    const url: string = "https://practice-automation.com/broken-links/";

    await page.goto(url);

    const links: Locator = page.locator("a[href]");

    const count: number = await links.count();

    console.log(count);

    for (let i = 0; i < count; i++) {

        let hrefs: string | null = await links.nth(i).getAttribute("href"); // This will get the element which has href attribute

        if (hrefs?.length === 0) continue;  // if href is empty , then it will skip the iteration

        const u: URL = new URL(hrefs!, url);  // generates raw url
        let absoluteURL: string = u.href;  // generated absolute url

        const response: Response = await fetch(absoluteURL);  // passing absolute url over the network

        if (response.status === 200) {  // if url passed on the netwrok return 200 OK
            console.log("Working URL", response.url, await links.nth(i).innerText());
        }
        else {
            console.log("Broken URL", response.url, await links.nth(i).innerText());
        }

    }


})