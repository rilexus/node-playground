class MinStack {
  stack = [];

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    let min = Infinity;
    for (let i = 0; i < this.stack.length; ++i) {
      if (this.stack[i] < min) {
        min = this.stack[i];
      }
    }
    return min;
  }
}

const minStack = new MinStack();
export { minStack };
