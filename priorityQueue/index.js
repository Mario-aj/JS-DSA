class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  #bubbleUp(idx) {
    if (idx === 0) return;

    const parentIdx = Math.floor((idx - 1) / 2);

    const target = this.values[idx];
    const parent = this.values[parentIdx];

    if (parent.priority <= target.priority) return;

    this.values[idx] = parent;
    this.values[parentIdx] = target;

    this.#bubbleUp(parentIdx);
  }
  enqueue(value, priority) {
    const node = new PriorityQueueNode(value, priority);
    this.values.push(node);

    this.#bubbleUp(this.values.length - 1);

    return this;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(20, 4);
priorityQueue.enqueue(40, 2);
priorityQueue.enqueue(10, 1);
priorityQueue.enqueue(300, 10);
priorityQueue.enqueue(3, 3);
console.log(priorityQueue.values);
