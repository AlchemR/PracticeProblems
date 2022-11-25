// 1480. Running Sum of 1d Array
// Easy
// 5.2K
// 265
// Companies
// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



//   Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].
//   Example 2:

// Input: nums = [1, 1, 1, 1, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].
//   Example 3:

// Input: nums = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]


// Constraints:

// 1 <= nums.length <= 1000
//   - 10 ^ 6 <= nums[i] <= 10 ^ 6
// Accepted
// 1M
// Submissions
// 1.2M
// Acceptance Rate
// 89.6 %

// var runningSum = function (nums) {
//   let output = []
//   for (i = 0; i < nums.length; i++) {
//     let total = 0
//     for (j = 0; j <= i; j++) {
//       total += nums[j]
//     }
//     output.push(total)
//   }
//   return output
// };
