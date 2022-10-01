// 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non - decreasing order, remove the duplicates in -place such that each unique element appears only once.The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array.You must do this by modifying the input array in -place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.



//   Example 1:

// Input: nums = [1, 1, 2]
// Output: 2, nums = [1, 2, _]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k(hence they are underscores).
//   Example 2:

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0
//   }
//   let result = 1, i = 0, j = 1;

//   while (i < nums.length && j < nums.length) {
//     if (nums[j] === nums[i]) {
//       j++;
//     } else {
//       result += 1;
//       i++;
//       nums[i] = nums[j];
//       j++;
//     }
//   }

//   return result;
// };



// ===========



// 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II.The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90. 
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



//   Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range[1, 3999].




var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0
  let s1 = s.split("")
  for (i = 0; i < s1.length; i++) {
    console.log("")
    if (legend[s1[i]]) { result += s1[i] }
  }
  console.log("result",result)
  return result
};

romanToInt("III")


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II.The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:
// I can be placed before V(5) and X(10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90. 
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
//   Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// // i’m have to make an object to hold all the numerical values of a roman numerals
// // have to iterate through each character in the roman numeral to get its value
// // have to take into account exceptions listed in the problem and check for them
// // only way to check for exceptions is to the hardcode them
// // once we’ve checked all the if statements we have to add the numerical to a sum variable

// Const romeToInt = (value) => {
//   "MCMXCIV"
// 	Const key = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   }

// Let sum = 0;
// Let i = 0;

//   while (i > value.length) {
//     0, 1, 3, 5
// 	Let char1 = value[i]; /M, c, x, i
// 	Let char2 = value[i + 1]; /C, m, c, v
//     if (char1 + char2 === “IV’) {
//       Sum += 4;
//       I++
//     } 
// 	Else if (char1 + char2 === ‘IX’) {
//       Sum += 9
//       I++
//     } else if (char1 + char2 === ‘XL’) {
//       Sum += 40
//       I++
//     } else if (char1 + char2 === ‘xc’) {
//       Sum += 90
//       I++
//     } else if (char1 + char2 === ‘cd’) {
//       Sum += 400
//       I++
//     } else if (char1 + char2 === ‘cm’) {
//       Sum += 900
//       I++
//     } else {
//       Sum += key[char1];
//     }
//     //sum = 1994
//     I++
//   }
// Return sum
// }




// Write a function, pairSum, that takes in an array and a target sum as arguments.The function should return an array containing a pair of indices whose elements sum to the given target.The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair that sums to the target.
//   test_00:
// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// test_01:
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// test_02:
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]


// Const pairSum = (arr, target) => {

//   //index 1 loop
//   // idx2 Nested loop
//   // If sum, return pair

//   // [3, 2, 5, 4, 1]
//   //[4, 7, 9, 2, 5, 1]
//   // [4, 7, 9, 2, 5, 1], 3

//   for (i = 0; i < arr.length; i++) {  // 3
//     For(j = i + 1; j < arr.length; j++ ) { // 
//       If(arr[i] + arr[j] === target){ // 9 + 1
//         return [i, j]
//       } //
//     }

//   }
//   // return false
// }
