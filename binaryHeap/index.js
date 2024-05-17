class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    function bubbleUp(values, index) {
      if (index === 0) return values;

      const parentIndex = Math.floor((index - 1) / 2);

      if (values[index] <= values[parentIndex]) return values;

      let temp = values[index];
      values[index] = values[parentIndex];
      values[parentIndex] = temp;

      return bubbleUp(values, parentIndex);
    }

    this.values = bubbleUp(this.values, this.values.length - 1);

    return this;
  }

  extractMax() {
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

        if (rightChild <= element) return values;

        swap(values, rightChildIndex, index);
        return heapify(values, rightChildIndex);
      }

      if (rightChildIndex >= valuesLength) {
        let leftChild = values[leftChildIndex];

        if (leftChild <= element) return values;

        swap(values, leftChildIndex, index);
        return heapify(values, leftChildIndex);
      }

      const idxToWorkWith =
        values[leftChildIndex] > values[rightChildIndex]
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

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(12);
binaryHeap.insert(1);
binaryHeap.insert(5);
binaryHeap.insert(18);
binaryHeap.insert(14);
binaryHeap.insert(8);

console.log(binaryHeap.values);

console.log("========================= EXTRACT MAX =========================");
let result = binaryHeap.extractMax();
console.log(result); // 18
console.log(binaryHeap.values); // [14, 12, 8, 1, 5]
