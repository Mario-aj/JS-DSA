Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let temp = this[i];

    for (var j = i - 1; this[j] > temp && j >= 0; j--) {
      this[j + 1] = this[j];
    }

    this[j + 1] = temp;
  }
};

const unsortedArray = [7, 12, 9, 11, 3, 1];
unsortedArray.insertionSort();
console.log(unsortedArray);
