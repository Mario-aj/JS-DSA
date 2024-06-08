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

  print() {
    let arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }
  removeDuplicates() {
    if (!this.head) return null;

    let visitedNodes = new Set();

    let current = this.head.next;
    let prev = this.head;
    visitedNodes.add(prev.value);

    while (current) {
      if (visitedNodes.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        visitedNodes.add(current.value);
        prev = current;
      }

      current = current.next;
    }
  }
}

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(2);
ll.push(1);
ll.push(4);

ll.removeDuplicates();
ll.print();
