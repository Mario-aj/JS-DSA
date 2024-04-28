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
    const node = this.createNode(value);

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

  unshift(value) {
    const newHead = this.createNode(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  createNode(value) {
    return new Node(value);
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

console.log(
  "=================================== UNSHIFT ==================================="
);
list.unshift("New Node");
console.log(list);

console.log(
  "=================================== GET ==================================="
);
const target = list.get(1);
console.log(target);
