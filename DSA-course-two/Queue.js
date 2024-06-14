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

  dequeue() {
    if (!this.length) return;

    let temp = this.fisrt;
    this.fisrt = this.fisrt.next;
    this.length--;

    if (!this.length) this.last = null;

    temp.next = null;
    return temp;
  }
}

const queue = new Queue();

console.log("=================== Enqueue ========================");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

console.log("=================== Dequeue ========================");
queue.dequeue();
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.dequeue());
