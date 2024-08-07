/**
 * You are given the root of a binary search tree (BST) and an integer val.

 * Find the node in the BST that the node's value equals val and return the subtree
 * rooted with that node. If such a node does not exist, return null.

 * Example 1:

 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 */

var searchBST = function (root, val) {
  if (!root) return null;

  let current = root;

  while (true) {
    if (current.val === val) break;

    if (current.val > val) {
      current = current.left;

      if (!current) break;
    } else {
      current = current.right;

      if (!current) break;
    }
  }

  return current;
};
