class MaxBinaryHeap {
  constructor() {
    this.root = [];
  }

  insert(value) {
    this.root.push(value);

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

    this.root = heapify(this.root, this.root.length - 1);

    return this;
  }
}

const mbh = new MaxBinaryHeap();

mbh.insert(58);
mbh.insert(72);
mbh.insert(99);
mbh.insert(75);
mbh.insert(61);
mbh.insert(100);

console.log(mbh.root);
