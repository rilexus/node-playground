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
}

class List {
  head = null;
  last = null;

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
}
