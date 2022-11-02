// https://leetcode.com/problems/merge-two-sorted-lists/
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {

//   //new list node
//   let output = new ListNode()
//   let current = output
//   let l1 = list1
//   let l2 = list2
//   // output arr, or current var
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       current.next = l1
//       l1 = l1.next
//     } else { // list2 < list1
//       current.next = l2
//       l2 = l2.next
//     }
//     current = current.next
//   }
//   current.next = l1 || l2
//   return output.next
// };
