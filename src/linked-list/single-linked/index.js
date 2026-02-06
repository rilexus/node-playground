class Node {
  value = null;
  next = null;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  setNext(node) {
    this.next = node;
  }
}

export class List {
  head = null;
  last = null;
  size = 0;

  /**
   * Adds a new node with the given value to the end of the list
   * @param {number} num - The value to add to the list
   * @returns {List} - Returns this list instance for chaining
   */
  add(num) {
    const newNode = new Node(num);

    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size = this.size + 1;

    return this;
  }

  /**
   * Converts the linked list to an array
   * @returns {Array<number>} - Array containing all values in the list
   */
  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  /**
   * Reverses the linked list by creating a new list with reversed values
   * @returns {List} - New list with values in reverse order
   */
  reverse() {
    const reversedList = new List();
    const values = this.toArray().reverse();

    for (const value of values) {
      reversedList.add(value);
    }

    return reversedList;
  }

  map(callback) {
    let c = this.head;
    while (c) {
      callback(c);
      c = c.next;
    }
  }

  merge(list) {
    const newlist = new List();

    let c1 = this.head;
    let c2 = list.head;

    while (c1 || c2) {
      if (c1) {
        newlist.add(c1.value);
        c1 = c1.next;
      }
      if (c2) {
        newlist.add(c2.value);
        c2 = c2.next;
      }
    }
    return newlist;
  }

  static fromArray(array) {
    const l = new List();
    for (let i = 0; i < array.length; ++i) {
      l.add(array[i]);
    }

    return l;
  }
}
