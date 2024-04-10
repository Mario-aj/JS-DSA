/**
 * recursiveRange
 * Write a function called recursiveRange which accepts a number and adds up all the numbers
 * from 0 to the number passed to the function
 */

function recursiveRange(number) {
  if (number < 1) return 0;

  return number + recursiveRange(--number);
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
