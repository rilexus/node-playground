import { test } from "node:test";
import { strict as assert } from "node:assert";
import { getConcatenation } from "./getConcatenation.js";

test("getConcatenation - happy path", () => {
  const testCases = [
    { input: [1, 2, 3], expected: [1, 2, 3, 1, 2, 3] },
    { input: [1, 3, 2, 1], expected: [1, 3, 2, 1, 1, 3, 2, 1] },
    { input: [5], expected: [5, 5] },
  ];

  for (const { input, expected } of testCases) {
    assert.deepStrictEqual(getConcatenation(input), expected);
  }
});

test("getConcatenation - edge cases", () => {
  // Empty array
  assert.deepStrictEqual(getConcatenation([]), []);

  // Single element array
  assert.deepStrictEqual(getConcatenation([42]), [42, 42]);

  // Large array
  const largeArray = Array.from({ length: 1000 }, (_, i) => i);
  const expected = [...largeArray, ...largeArray];
  assert.deepStrictEqual(getConcatenation(largeArray), expected);
});

test("getConcatenation - error paths", () => {
  // Non-array input
  assert.throws(() => getConcatenation(null), TypeError);
  assert.throws(() => getConcatenation(undefined), TypeError);
  assert.throws(() => getConcatenation("not an array"), TypeError);
  assert.throws(() => getConcatenation(42), TypeError);
});
