class SinglyLinkedListNode {
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
    const node = new SinglyLinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    return current;
  }

  unshift(value) {
    if (!this.head) return this.push(value);

    const node = new SinglyLinkedListNode(value);

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  shift() {
    if (!this.length) return undefined;

    let removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.length--;

    if (!this.length) this.tail = null;

    return removedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;

    for (let i = 0; i < index; i++) current = current.next;

    return current;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newnode = new Node(value);
    const prev = this.get(index - 1);

    newnode.next = prev.next;
    prev.next = newnode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let prev = this.get(index - 1);
    let removedNode = prev.next;

    prev.next = removedNode.next;
    removedNode.next = null;
    this.length--;

    return removedNode;
  }

  reverse() {
    if (!this.head) return undefined;

    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }
}

const llist = new SinglyLinkedList();

llist.push("first");
llist.push("second");
llist.push("third");

console.log(llist);

console.log("======================= POP ======================");
llist.pop();
llist.pop();
console.log(llist);
llist.pop();
console.log(llist);
llist.pop();

console.log("===================== Unshift ===================");
llist.push("first");
llist.push("second");
llist.push("third");

llist.unshift("new_fist");
console.log(llist);

console.log("===================== Shift ===================");
llist.shift();
console.log(llist);

console.log("\n===================== REVERSE =====================");
llist.reverse();
console.log(llist);
