/**
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 * Example 1:

 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * 
 * Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
 */

var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function dfs(node) {
    if (!node) return;

    if (node.val >= low && node.val <= high) sum += node.val;

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return sum;
};

binarySearchTree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: null,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      left: null,
      right: null,
    },
  },
};

const sum = rangeSumBST(binarySearchTree, 7, 15);
console.log(sum); // 32
