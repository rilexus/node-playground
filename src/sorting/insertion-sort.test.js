import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { insertionSort } from "./insertion-sort.js";

describe("insertion sort", () => {
  test("sort", () => {
    assert.deepStrictEqual(insertionSort([3, 2, 1]), [1, 2, 3]);
  });
});
