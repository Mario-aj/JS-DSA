/**
 * stringifyNumbers
 * Write a function called stringifyNumbers which takes in an object and finds all of the
 * values which are numbers and converts them to strings. Recursion would be a great way to solve this!

 * The exercise intends for you to create a new object with the numbers converted to strings,
 * and not modify the original. Keep the original object unchanged.
 */

function stringifyNumbers(obj) {
  let result = {};

  const entries = Object.entries(obj);

  if (!entries.length) return entries;

  function helper(input) {
    if (!input.length) {
      return;
    }

    let key = input[0][0];
    let value = input[0][1];

    if (typeof value === "object") {
      result[key] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      result[key] = String(value);
    } else {
      result[key] = value;
    }

    helper(input.slice(1));
  }

  helper(entries);

  return result;
}

function stringifyNumbersTeacherSolution(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
// stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
