/**

*/

function isBalancedParentheses(parentheses) {
  const stack = [];

  for (let parenthese of parentheses) {
    if (parenthese === "(" || parenthese === "[" || parenthese === "{") {
      stack.push(parenthese);
    } else {
      if (!stack.length) return false;

      let last = stack.pop();

      if (
        (parenthese === ")" && last !== "(") ||
        (parenthese === "]" && last !== "[") ||
        (parenthese === "}" && last !== "{")
      )
        return false;
    }
  }

  if (stack.length) return false;

  return true;
}

console.log(isBalancedParentheses("(()())"));
console.log(isBalancedParentheses("(()"));
console.log(isBalancedParentheses(")("));
