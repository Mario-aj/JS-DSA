/**
 * nestedEvenSum
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers
 * in an object which may contain nested objects.
 */

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return [];

  let firstLetter = arr[0].charAt(0).toUpperCase();

  let results = [firstLetter + arr[0].slice(1)];

  return results.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
