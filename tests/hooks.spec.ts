import { test } from "@playwright/test";

test.beforeAll("precondition", ({}) => {
  console.log("This is precondtion executed before all tests in this file");
});

test.afterAll("postcondition", ({}) => {
  console.log("This is postcondtion executed before all tests in this file");
});

test.beforeEach("before each test case", async () => {
  console.log("This should execute before specific method");
});

test.afterEach("after each test case", async () => {
  console.log("This should execute after specific method");
});

test("First test case", async ({}) => {
  console.log("First test case");
});

test("Second test case", async ({}) => {
  console.log("Second test case");
});

test("Third test case", async ({}) => {
  console.log("Third test case");
});

/// Make sure that, fullyParallal should be set to false and worker count should be set to 1
