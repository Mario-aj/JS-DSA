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
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list);

console.log(
  "======================================== POP ========================================"
);
list.pop();
console.log(list);
