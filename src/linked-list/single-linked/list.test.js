import { describe, test } from "node:test";
import { List } from "./index.js";
import { strict as assert } from "node:assert";

describe("Single Linked List", () => {
  test("toArray", () => {
    const list = new List();
    list.add(1);
    list.add(2);
    list.add(3);
    assert.deepStrictEqual(list.toArray(), [1, 2, 3]);
  });

  test("fromArray", () => {
    const list1 = List.fromArray([1, 1, 4]);
    assert.deepStrictEqual(list1.toArray(), [1, 1, 4]);
  });

  test("merge", () => {
    const list1 = List.fromArray([1, 2, 4]);
    const list2 = List.fromArray([1, 3, 5]);
    const l = list1.merge(list2);

    assert.deepStrictEqual(l.toArray(), [1, 1, 2, 3, 4, 5]);
  });
});
