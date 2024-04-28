class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== this.tail) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.length) return undefined;

    let previousHead = this.head;
    this.head = previousHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return previousHead;
  }
}

const list = new SinglyLinkedList();

console.log(list);
list.push("hey");
list.push("There");
list.push("Mario");

console.log(list);

console.log(
  "=================================== POP ==================================="
);
list.pop();
console.log(list);

console.log(
  "=================================== SHIFT ==================================="
);
list.shift();
console.log(list);
