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
}

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(12);
binaryHeap.insert(1);
binaryHeap.insert(5);
binaryHeap.insert(18);
binaryHeap.insert(14);
binaryHeap.insert(8);

console.log(binaryHeap.values);
