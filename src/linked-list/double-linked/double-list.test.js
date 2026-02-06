import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { List } from "./index.js";

describe("Double Linked List", () => {
  test("get", () => {
    const list = List.fromArray([1, 2, 3, 4]);

    assert.equal(list.get(0), 1);
    assert.equal(list.get(1), 2);
    assert.equal(list.get(2), 3);
    assert.equal(list.get(3), 4);
  });

  test("addAtTail", () => {
    const list = new List();

    list.addAtTail(1);
    assert.equal(list.get(0), 1);

    list.addAtTail(2);
    assert.equal(list.get(1), 2);

    list.addAtTail(3);
    assert.equal(list.get(2), 3);

    list.addAtTail(4);
    assert.equal(list.get(3), 4);
  });
});
