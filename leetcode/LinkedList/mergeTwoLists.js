/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together
the nodes of the first two lists.

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

function mergeTwoLists(list1, list2) {
  if (!list1?.length && !list2?.length) return [];

  if (!list1.length) return list2;

  if (!list2.length) return list1;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.val > current2.val) {
      if (!head) {
        list1 = current2;
      } else {
        head.next = current2;
        head = head.next;
      }
      current2 = current2.next;
    } else {
      if (!head) {
        head = { val: current1.val, next: null };
      } else {
        head.next = current1;
        head = head.next;
      }
      current1 = current1.next;
    }
  }

  while (current1) {
    head.next = current1;
    head = head.next;
  }

  while (current2) {
    head.next = current2;
    head = head.next;
  }
}
