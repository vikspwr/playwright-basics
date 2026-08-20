
import { expect, test } from '@playwright/test'

// only , skip, fixme, slow, fail

test.only('Annotation 1 - only', async () => {
    console.log("only annotation");
})

test.skip('Annotation 2 - skip', async () => {
    console.log("skip annotation");

})


test.fixme('Annotation 3 - fixme', async () => {
    console.log("fixme annotation");
    expect(10).toBe(20);

})


test('Annotation 4 - slow', async () => {
    test.slow();
    console.log("slow annotation");
})


test.fail('Annotation 5 - fail', async () => {
    console.log("fail annotation");
    expect(10).toBe(10);
})

test.only('Annotation 6 - only', async () => {
    console.log("only annotation");

})


//////

// only  - this will run only those specific test cases which are annotated as only
// skip -  this will skip running those specific test cases which are annotated as skip
// fixme - this will be considered as failed test cases in prior as team knows that this test case needs to be fixed, hence this test case is marked as skipped & annotated with fixme
// slow - when this test case is annotated as slow, this will increase the default time out by 3 times
// fail - this test case will be marked as failed in any situation when its annotated as fail


