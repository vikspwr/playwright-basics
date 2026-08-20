
import { expect, test } from '@playwright/test'

// Test Annotations
// Annotating the test to describe the metadata of the test case to let the team knows about current issue/blocker related to it.

test("Login Test Case", {
    annotation: [{ type: "functional issue", description: "Login button is not clickable so ignore the failure of the test case for now, created incident with id 1234" },
    { type: "performance issue", description: "Test case performance needs to be improved, created incident with id 5678" }]
}
    , async () => {

        //  expect(10).toBe(20);

        /////
    })


/// Run time test annotations

test("Run time annotations", ({ browser }) => {

    test.info().annotations.push({

        type: "Browser Version",
        description: browser.version(),

    });

    test.info().annotations.push({

        type: "ENVIRONMENT",
        description: (process.env.EXECUTION_ENV!).trim() || 'preprod',

    });

    //// Test case start

})
