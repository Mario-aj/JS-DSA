class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    function heapify(arr, index) {
      if (index <= 0) return arr;

      const parentIdx = Math.floor((index - 1) / 2);

      let child = arr[index];
      let parent = arr[parentIdx];

      if (child <= parent) return arr;

      arr[parentIdx] = child;
      arr[index] = parent;

      return heapify(arr, parentIdx);
    }

    this.heap = heapify(this.heap, this.heap.length - 1);

    return this;
  }

  extractMax() {
    if (!this.heap.length) return;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = max;

    this.heap.pop();
    this.#sinkDown(0);

    return max;
  }

  #sinkDown(idx) {
    if (idx >= this.heap.length) return;

    const leftChildIdx = 2 * idx + 1;
    const rightChildIdx = 2 * idx + 2;
    const parent = this.heap[idx];
    let maxIdx = idx;

    if (
      this.heap[leftChildIdx] &&
      this.heap[leftChildIdx] > this.heap[maxIdx]
    ) {
      maxIdx = leftChildIdx;
    }

    if (
      this.heap[rightChildIdx] &&
      this.heap[rightChildIdx] > this.heap[maxIdx]
    ) {
      maxIdx = rightChildIdx;
    }

    if (maxIdx !== idx) {
      this.heap[idx] = this.heap[maxIdx];
      this.heap[maxIdx] = parent;
      this.#sinkDown(maxIdx);
    }
  }
}

const mbh = new MaxBinaryHeap();

mbh.insert(80);
mbh.insert(75);
mbh.insert(65);
mbh.insert(55);
mbh.insert(50);
mbh.insert(60);

console.log(mbh.heap);

console.log(mbh.extractMax()); // 80
console.log(mbh.heap); // [75, 60, 65, 55, 50]
