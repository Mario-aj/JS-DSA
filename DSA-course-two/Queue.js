class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.fisrt = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.last = newNode;
      this.fisrt = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }

    this.length++;
    return this;
  }
}

const queue = new Queue();

console.log("=================== Queue ========================");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
