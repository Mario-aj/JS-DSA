/**
 * The idea.
 * Go trhough the array and compare the currrent one element with it's adjacent,
 * if the current is greater, than make a swap until the end of the array, and repeat
 * it until the sorted part.
 *
 */

function bubbleSort() {
  for (let i = 0; i < this.length; i++) {
    let noSwap = true;

    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;

        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return this;
}

Array.prototype.bubbleSort = bubbleSort;

const arr = [5, 3, 7, 12, 2];

arr.bubbleSort();
console.log(arr); // [2, 3, 5, 7, 12]

// Breaking the loop after the first swap be made.
const unsort = [2, 3, 5, 12, 7];

unsort.bubbleSort();
console.log(unsort); // [2, 3, 5, 7, 12]
