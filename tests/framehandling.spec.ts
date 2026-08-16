// Frame Handling

import { test, type Frame, type FrameLocator, type Locator } from '@playwright/test'

test('Handle Frames in Playwright', async ({ page }) => {

    await page.goto("https://jqueryui.com/droppable/");

    const frame: FrameLocator = page.frameLocator("iframe.demo-frame");

    const src: Locator = frame.locator("div#draggable");
    const dest = frame.locator("div#droppable");


    await src.dragTo(dest);

    //const allFrames: Frame[] = page.frames();
    const allFrames: Array<Frame> = page.frames();
    console.log(allFrames.length);

    for (const frame of allFrames) {

        console.log('Frame Name : ', frame.name());
        console.log('Frame URL : ', frame.url());
        console.log("------------------");

    }


    // await page.pause();


})