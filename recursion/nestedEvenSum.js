/**
 * nestedEvenSum
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers
 * in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
  let result = 0;

  let objectEntries = Object.entries(obj);

  if (!objectEntries.length) return 0;

  function helper(input) {
    if (!input.length) {
      return;
    }

    if (typeof input[0][1] === "object") {
      result += nestedEvenSum(input[0][1]);
    }

    if (input[0][1] % 2 === 0) {
      result += input[0][1];
    }

    helper(input.slice(1));
  }

  helper(objectEntries);

  return result;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
