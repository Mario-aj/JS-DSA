class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new StackNode(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  pop() {
    if (!this.size) return null;

    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return oldFirst.value;
  }
}

const stack = new Stack();

stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
