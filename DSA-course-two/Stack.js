class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new StackNode(value);

    if (!this.length) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
