import { test } from "node:test";
import { strict as assert } from "node:assert";

import { removeElement } from "./removeElement.js";

test("removeElement - happy path", () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const result = removeElement(nums, val);

  assert.equal(result, 2);
});

test("removeElement - multiple occurrences", () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const result = removeElement(nums, val);

  assert.equal(result, 5);
});

test("removeElement - no matches", () => {
  const nums = [1, 2, 3, 4];
  const val = 5;
  const result = removeElement(nums, val);

  assert.equal(result, 4);
});

test("removeElement - all elements match", () => {
  const nums = [1, 1, 1, 1];
  const val = 1;
  const result = removeElement(nums, val);

  assert.equal(result, 0);
});

test("removeElement - empty array", () => {
  const nums = [];
  const val = 1;
  const result = removeElement(nums, val);

  assert.equal(result, 0);
});

test("removeElement - single element matching", () => {
  const nums = [1];
  const val = 1;
  const result = removeElement(nums, val);

  assert.equal(result, 0);
});

test("removeElement - single element not matching", () => {
  const nums = [1];
  const val = 2;
  const result = removeElement(nums, val);

  assert.equal(result, 1);
});

test("removeElement - duplicates at start and end", () => {
  const nums = [1, 1, 2, 3, 3, 3];
  const val = 3;
  const result = removeElement(nums, val);

  assert.equal(result, 3);
});
