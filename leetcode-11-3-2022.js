// 48. Rotate Image
// Medium
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees(clockwise).
// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.
// Example 1:
// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// Example 2:
// Input: matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
// Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
//   - 1000 <= matrix[i][j] <= 1000





  var rotate = function (matrix) {
let temp;
    for (let i = 0; i < matrix.length; i++) {
      // console.log(matrix[i])
      // console.log(matrix)
      for (j = i + 1; j < matrix.length; j++){
        // console.log("matrix ij", matrix[i][j])
        // console.log("matrix ji", matrix[j][i])
        temp = matrix[j][i]
        matrix[j][i] = matrix[i][j]
        matrix[i][j] = temp
        // temp = matrix[i][j]
        
      }
      // console.log("matrix i 2",matrix[i])
    }
    
    for(k = 0; k < matrix.length; k++){
      matrix[k].reverse()
    }
    
    // console.log("matrix i 2",matrix)
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]