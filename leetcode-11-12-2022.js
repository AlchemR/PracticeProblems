// 1512. Number of Good Pairs
// Easy
// 3.2K
// 169
// Companies
// Given an array of integers nums, return the number of good pairs.

// A pair(i, j) is called good if nums[i] == nums[j] and i < j.



//   Example 1:

// Input: nums = [1, 2, 3, 1, 1, 3]
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0 - indexed.
//   Example 2:

// Input: nums = [1, 1, 1, 1]
// Output: 6
// Explanation: Each pair in the array are good.
//   Example 3:

// Input: nums = [1, 2, 3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// Accepted
// 367.2K
// Submissions
// 416.3K
// Acceptance Rate
// 88.2 %

// var numIdenticalPairs = function (nums) {
//   let counter = 0
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) { counter += 1 }
//     }
//   }
//   return counter
// };