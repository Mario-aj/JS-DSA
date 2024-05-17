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

  dequeue() {
    if (this.values.length === 0) return;

    let oldRoot = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    function swap(values, i, j) {
      let temp = values[i];
      values[i] = values[j];
      values[j] = temp;
    }

    function heapify(values, index) {
      let valuesLength = values.length;
      let element = values[index];

      if (index === valuesLength - 1) return values;

      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      if (valuesLength <= leftChildIndex && valuesLength <= rightChildIndex)
        return values;

      if (leftChildIndex >= valuesLength) {
        let rightChild = values[rightChildIndex];

        if (rightChild.priority >= element.priority) return values;

        swap(values, rightChildIndex, index);
        return heapify(values, rightChildIndex);
      }

      if (rightChildIndex >= valuesLength) {
        let leftChild = values[leftChildIndex];

        if (leftChild.priority >= element.priority) return values;

        swap(values, leftChildIndex, index);
        return heapify(values, leftChildIndex);
      }

      const idxToWorkWith =
        values[leftChildIndex].priority < values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;

      if (values[idxToWorkWith] <= index) return values;

      swap(values, idxToWorkWith, index);
      return heapify(values, idxToWorkWith);
    }

    this.values = heapify(this.values, 0);

    return oldRoot;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(20, 4);
priorityQueue.enqueue(40, 2);
priorityQueue.enqueue(10, 1);
priorityQueue.enqueue(300, 10);
priorityQueue.enqueue(3, 3);
console.log("========================= ENQUEUE =========================");
console.log(priorityQueue.values); // [10, 40, 3, 20, 300]

console.log("========================= DEQUEUE =========================");
let result = priorityQueue.dequeue();
console.log(result); // 10
console.log(priorityQueue.values); // [40, 3, 20, 300]
