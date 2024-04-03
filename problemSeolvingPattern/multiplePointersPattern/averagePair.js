// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

function averagePair(array, targetAverage) {
  if (!array.length || !targetAverage) return false;

  let leftPoint = 0;
  let rightPoint = array.length - 1;

  while (leftPoint < rightPoint) {
    let average = (array[leftPoint] + array[rightPoint]) / 2;

    if (average === targetAverage) return true;

    if (average < targetAverage) {
      leftPoint++;
    } else if (average > targetAverage) {
      rightPoint--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
