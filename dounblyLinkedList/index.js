class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  creatNode(value) {
    return new Node(value);
  }
  push(value) {
    const newNode = this.creatNode(value);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.length) return undefined;

    // LL: null <=> [1] <=> [2] <=> [3] <=> null
    const oldestHead = this.head; // [1]

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldestHead.next; // [2]
      this.head.prev = null; // null <=> [2]
      oldestHead.next = null; // [1] <=> null
    }

    this.length--;
    return oldestHead;
  }

  unshit(value) {
    const newNode = this.creatNode(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const middle = Math.floor(this.length / 2);
    let current;

    if (middle <= index) {
      current = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    } else {
      current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    }

    return current;
  }

  set(index, value) {
    const targetNode = this.get(index);

    if (!targetNode) return false;

    targetNode.value = value;

    return true;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list);

console.log("============================ POP ============================");
list.pop();
console.log(list);

console.log("=========================== SHIFT ===========================");
list.shift();
console.log(list);

console.log("========================== UNSHIFT ==========================");
list.unshit(0);
console.log(list);

console.log("========================== GET ==========================");
list.push(5);
list.push(6);
list.push(7);
const target = list.get(3);
console.log(target);

console.log("========================== SET ==========================");
list.set(1, 1);
list.set(2, 2);
console.log(list);
