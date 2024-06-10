/**
 * Leetcode 21. Merge two sorted  list
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing
together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

Example 2:
  Input: list1 = [], list2 = []
  Output: []

Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]

Constraints:
  The number of nodes in both lists is in the range [0, 50].
  -100 <= Node.val <= 100
  Both list1 and list2 are sorted in non-decreasing order.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }
}

/**
 * solution idea: Using merge function of merge sort algorithm.
  time complexity:  O (n + m)
  space complexity: O (n)
 */
function mergeTwoList(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1 && list2) return list2;
  if (!list2 && list1) return list1;

  let s1 = list1;
  let s2 = list2;
  let newList = null;
  let newListCurrent = newList;

  while (s1 && s2) {
    if (s1.value > s2.value) {
      if (!newList) {
        newList = s2;
        newListCurrent = newList;
      } else {
        newListCurrent.next = s2;
        newListCurrent = newListCurrent.next;
      }
      s2 = s2.next;
    } else {
      if (!newList) {
        newList = s1;
        newListCurrent = newList;
      } else {
        newListCurrent.next = s1;
        newListCurrent = newListCurrent.next;
      }

      s1 = s1.next;
    }
  }

  while (s1) {
    newListCurrent.next = s1;
    newListCurrent = newListCurrent.next;
    s1 = s1.next;
  }

  while (s2) {
    newListCurrent.next = s2;
    newListCurrent = newListCurrent.next;
    s2 = s2.next;
  }

  return newList;
}

const l1 = new LinkedList();

l1.push(1);
l1.push(2);
l1.push(4);

const l2 = new LinkedList();

l2.push(1);
l2.push(3);
l2.push(4);

console.log(mergeTwoList(l1.head, l2.head)); // 1 => 2 => 3 => 4 => 5 => 6 => 7 => null;
