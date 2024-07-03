Array.prototype.selectionSort = function selectionSort() {
  for (let i = 0; i < this.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < this.length; j++) {
      if (this[minValueIndex] > this[j]) {
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      let temp = this[i];
      this[i] = this[minValueIndex];
      this[minValueIndex] = temp;
    }
  }
};

const unsortedArray = [7, 12, 9, 11, 3];

unsortedArray.selectionSort();
console.log(unsortedArray);
