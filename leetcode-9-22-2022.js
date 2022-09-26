// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.



//   Example 1:


// Input: head = [1, 1, 2]
// Output: [1, 2]
// Example 2:


// Input: head = [1, 1, 2, 3, 3]
// Output: [1, 2, 3]


// Constraints:

// The number of nodes in the list is in the range[0, 300].
// - 100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

var deleteDuplicates = function (head) {
  let curr = head;
  let prev = head;

  while (curr) {
    if (prev.val === curr.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};




// ================
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.

var deleteDuplicates = function (head) {
  list = [1, 2, 3]
  list2 = [1, 2, 4]
  head = list[0]

  let current = list1Head
  let current1 = list2Head
  while (current.next !== null && current !== null) {
    if (current.val == current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head

}



// =======================



// n=2([1,1], [2])
// n=3([1,1,1], [1,2], [2,1])
// n=4 ([1,1,1,1], [2,2], [1,1,2], [2,1,1], [1,2,1])
// n=5 ([1,1,1,1,1], [2,1,1,1], [1,2,1,1],[1,1,2,1], [1,1,1,2], [])

// var climbStairs = function (n) {

// };



// You are climbing a staircase.It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

//   Input : n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// n = 4
// output = 5

// n = 5
// output = 8

// n = 6
// output = 13

// function climbStairs(n) {
//   if (n === 0 || n === 1 || n === 2) return n;

//   return climbStairs(n - 1) + climbStairs(n - 2);

// }