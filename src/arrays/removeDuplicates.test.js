import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { removeDuplicates } from "./removeDuplicates.js";

describe("removeDuplicates", () => {
  const testCases = [
    { name: "empty array", input: [], expectedLength: 0, expectedArray: [] },
    {
      name: "single element",
      input: [1],
      expectedLength: 1,
      expectedArray: [1],
    },
    {
      name: "all elements are the same",
      input: [1, 1, 1, 1],
      expectedLength: 1,
      expectedArray: [1],
    },
    {
      name: "no duplicates",
      input: [1, 2, 3, 4],
      expectedLength: 4,
      expectedArray: [1, 2, 3, 4],
    },
    {
      name: "mixed duplicates",
      input: [1, 1, 2, 2, 3, 4, 4, 5],
      expectedLength: 5,
      expectedArray: [1, 2, 3, 4, 5],
    },
    {
      name: "duplicates at the end",
      input: [1, 2, 3, 4, 4, 4],
      expectedLength: 4,
      expectedArray: [1, 2, 3, 4],
    },
    {
      name: "duplicates at the beginning",
      input: [1, 1, 1, 2, 3],
      expectedLength: 3,
      expectedArray: [1, 2, 3],
    },
    {
      name: "larger array with multiple duplicates",
      input: [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5],
      expectedLength: 5,
      expectedArray: [1, 2, 3, 4, 5],
    },
  ];

  for (const { name, input, expectedLength, expectedArray } of testCases) {
    test(`should handle ${name} correctly`, () => {
      const nums = [...input];

      const resultLength = removeDuplicates(nums);

      assert.strictEqual(resultLength, expectedLength);
      assert.deepEqual(nums, expectedArray);
    });
  }

  test("should handle negative numbers correctly", () => {
    const nums = [-1, -1, 0, 0, 1, 1];
    const resultLength = removeDuplicates(nums);

    assert.strictEqual(resultLength, 3);
    assert.deepEqual(nums, [-1, 0, 1]);
  });

  test("should handle zeros correctly", () => {
    const nums = [0, 0, 0, 1, 1, 2];
    const resultLength = removeDuplicates(nums);

    assert.strictEqual(resultLength, 3);
    assert.deepEqual(nums, [0, 1, 2]);
  });

  test("should modify the original array in place", () => {
    const nums = [1, 1, 2, 2, 3];
    const originalRef = nums;

    removeDuplicates(nums);

    assert.deepEqual(nums, [1, 2, 3]);
    assert.strictEqual(nums, originalRef);
  });
});
