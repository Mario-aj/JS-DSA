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

  shift() {
    if (!this.head) return;

    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let temp;

    if (index <= this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.next;
      }
    }

    return temp;
  }
  set(index, value) {
    const target = get(index);

    if (!target) return false;

    target.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new DoublyLInkedListNode(value);
    let before = this.get(index - 1);
    let after = before.next;

    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;

    this.length++;

    return true;
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

console.log("===================== SHIFT ======================");
dll.shift();
console.log(dll);

console.log("===================== INSERT ======================");
dll.insert(2, 100);
console.log(dll.head.next.next);
