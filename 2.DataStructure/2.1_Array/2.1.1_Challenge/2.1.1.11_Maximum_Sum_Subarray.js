// Problem statement#
// Given an integer array, return the maximum subarray sum. The array may contain both positive and negative integers and is unsorted.

// Partial function definition
// let findMaxSumSubArray = function(A) {
  
//   return -1
// };
// Input
// an array A
// Output
// a number (maximum subarray sum)

// Sample input
// [-4, 2, -5, 1, 2, 3, 6, -5, 1]
// Sample output
// largest_sum = 12

let findMaxSumSubArray = function(A) {
    let max = Number.MIN_SAFE_INTEGER
    let arrLen = A.length
    let i = 0
    let count = 0
    let tmpSum = 0
    while(i< arrLen){
  
      if(count === arrLen - 1){
        count = i
        tmpSum = 0
        i++
      }
  
      tmpSum += A[count]
  
      if(tmpSum>max){
        max = tmpSum
      }
  
      count++
      
    }
    console.log("==========")
    return max
  };

// solution
// let findMaxSumSubArray = function(array_) {
//     if (array_.length < 1) {
//       return 0;
//     }
  
//     let currMax = array_[0];
//     let globalMax = array_[0];
//     let lengtharray = array_.length;
//     for (let i = 1; i < lengtharray; i++) {
//       if (currMax < 0) {
//         currMax = array_[i];
//       } else {
//         currMax += array_[i];
//       }
  
//       if (globalMax < currMax) {
//         globalMax = currMax;
//       }
//     }
//     return globalMax;
//   };
  
//   v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
//   console.log("Sum of largest subarray: " + findMaxSumSubArray(v));
