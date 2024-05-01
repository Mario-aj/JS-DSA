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

  set(value, index) {
    const targetNode = this.get(index);

    if (!targetNode) return false;

    targetNode.value = value;

    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);

    if (index === this.length) return !!this.push(value);

    let previousNode = this.get(index - 1);
    const newNode = this.createNode(value);

    let nodeAfter = previousNode.next;
    previousNode.next = newNode;
    newNode.next = nodeAfter;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;

    previousNode.next = currentNode.next;

    this.length--;

    return currentNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
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
let target = list.get(1);
console.log(target);

console.log(
  "=================================== SET ==================================="
);

list.set("FIRST", 0);
console.log(list);

console.log(
  "=================================== INSERT ==================================="
);

list.insert("INSERTED VALUE!", 1);
console.log(list);

console.log(
  "=================================== REMOVE ==================================="
);

list.remove(1);
console.log(list);

console.log(
  "=================================== REVERSE ==================================="
);

list.reverse();
console.log(list);

list.reverse();
console.log(list);
