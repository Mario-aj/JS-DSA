/**
 * Write a function which accepts two args, the long and short strings,
 * the function should return how money times the short string appears in the long one.
 */

function stringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;

      if (j === short.length - 1) {
        count++;
      }
    }
  }

  return count;
}

function stringSearchRecursivilly(long = "", short = "") {
  let result = 0;

  if (!long) return 0;

  function helper(longInput = "", shortInput = "") {
    if (!shortInput) {
      return 1;
    }

    if (!longInput) return 0;

    if (longInput[0] !== shortInput[0]) return 0;

    return helper(longInput.substring(1), shortInput.substring(1));
  }

  result += helper(long, short);

  return result + stringSearchRecursivilly(long.substring(1), short);
}

console.log(stringSearch("I want to migrate to Canada", "to")); // 2
console.log(stringSearchRecursivilly("I want to migrate to Canada", "to")); // 2

console.log(stringSearch("my name is something", "ing"));
console.log(stringSearchRecursivilly("my name is something", "ing"));

console.log(
  stringSearch("I live in angola, but I would like to live in Canada", "at")
); // 0
console.log(
  stringSearchRecursivilly(
    "I live in angola, but I would like to live in Canada",
    "at"
  )
); // 0
