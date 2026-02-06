import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { mergeSort } from "./merge-sort.js";

describe("merge sort", () => {
  test("sort", () => {
    assert.deepStrictEqual(mergeSort([6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6]);
  });
});
