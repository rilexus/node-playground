class Node {
  value = null;
  next = null;
  prev = null;

  constructor(value) {
    this.value = value;
  }

  setNext(node) {
    this.next = node;
  }

  setPrev(node) {
    this.prev = node;
  }
}

export class List {
  head = null;
  tail = null;
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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;

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

  get(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; ++i) {
      current = current.next;
    }

    return current.value;
  }

  static fromArray(array) {
    const l = new List();
    for (let i = 0; i < array.length; ++i) {
      l.add(array[i]);
    }

    return l;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  addAtTail(val) {
    return this.add(val);
  }

  addAtIndex(index, val) {}

  deleteAtIndex(index) {}
}
