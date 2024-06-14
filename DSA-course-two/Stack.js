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

  pop() {
    if (!this.length) return;

    let removedNode = this.top;
    this.top = this.top.next;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}

const stack = new Stack();

console.log("====================== PUSH ======================");
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

console.log("====================== POP ======================");
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
