class DoublyLInkedListNode {
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

  push(value) {
    const newNode = new DoublyLInkedListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;

    return temp;
  }

  unshift(value) {
    const node = new DoublyLInkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(5);

console.log(dll);

console.log("======================= POP ========================");
dll.pop();
dll.pop();
console.log(dll);

console.log("===================== UNSHIFT ======================");
dll.unshift(0);
console.log(dll);
