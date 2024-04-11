/**
 * collectStrings
 * Write a function called collectStrings which accepts an object and returns an array
 * of all the values in the object that have a typeof string
 */

function collectStrings(obj) {
  let result = [];

  let key = Object.keys(obj)[0];

  if (!key) return [];

  if (typeof obj[key] === "object") {
    return collectStrings(obj[key]);
  }

  if (typeof obj[key] === "string") {
    result.push(obj[key]);
  }

  delete obj[key];

  return result.concat(collectStrings(obj));
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
