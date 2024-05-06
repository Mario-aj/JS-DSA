class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new QueueNode(value);

    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const oldHead = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    oldHead.next = null;

    return oldHead.value;
  }

  peek() {
    if (this.size === 0) return undefined;

    return this.last.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);

queue.dequeue();
queue.dequeue();
console.log(queue);

console.log(queue.peek());
console.log(queue.isEmpty());
