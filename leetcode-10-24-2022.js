// 9. Palindrome Number
// Easy
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.


// Constraints:
// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string ?


// var isPalindrome = function (x) {

//   //convert to string
//   let a = x.toString()
//   //split
//   console.log("a",a)
//   let b = a.split("")
//   console.log("b",b)
//   console.log("b",b.length)
//   //for loop, including start & end pointer
//   for(i = 0, j = b.length - 1; i <= j; j--, i++ ){
//     console.log('i', i)
//     console.log('j', j)
//     console.log("b[i]",b[i])
//     console.log("b[j]",b[j])
// if(b[i] === b[j]){} else{ console.log("false"); return false}
//   }
//   console.log("true")
//   return true
//     // return false in loop true
//     // return true outside loop
    
    
// };

// isPalindrome(112211)