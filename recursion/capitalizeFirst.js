/**
 * nestedEvenSum
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers
 * in an object which may contain nested objects.
 */

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return [];

  let results = [];
  let str = arr[0];

  let firstLetter = str.charAt(0).toUpperCase();

  results.push(firstLetter + str.slice(1));

  return results.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']