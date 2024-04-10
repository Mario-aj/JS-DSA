/**
 * reverse
 * Write a recursive function called reverse which accepts a string and
 * returns a new string in reverse.
 */

function reverse(str) {
  if (!str) return "";

  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

console.log(reverse("awesome") === "emosewa");
console.log(reverse("rithmschool") === "loohcsmhtir");
