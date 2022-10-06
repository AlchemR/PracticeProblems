// https://leetcode.com/problems/valid-palindrome/
// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//   Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//   Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//   Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non - alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


//   Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


// =============


// https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

//   Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//   Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//   Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.


//   Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string ?

// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   return x.toString().split('').reverse().join('') === x.toString();
// };




//=================
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

// 121. Best Time to Buy and Sell Stock
// Easy
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//   Example 2:

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104





// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let min = prices[0]; // 0
//   let current;
//   let delta = 0; // 0
//   for (i = 0; i < prices.length; i++) { // [7,1,5,3,6,4]
//     current = prices[i];
//     if (min > current) { min = current }
//     if ((min < current) && (current - min) > delta) { delta = current - min }
//   }
//   return delta
// };
