// Problem Statement
// Implement a function findMinimum(arr) that finds the smallest number in the given array.

// Input
// An array of integers

// Output
// The smallest number in the array

// Sample Input
// arr = [9,2,3,6]
// Sample Output
// 2

function findMinimum(arr) {
    /* let min = Number.MAX_SAFE_INTEGER */
    let min = arr[0]
    let i = 1
    let arrLength = arr.length 
    while(i<arrLength){
       if(arr[i] < min){
          min = arr[i]
       }
       i++
    }
    return min
    /* return Math.min(...arr); */
 }

 // solution

//  function findMinimum(arr){
//     arr.sort((function(a, b){
//           return a - b
//       }))
//     return arr[0]
//   }
//   console.log(findMinimum([9,2,3,6,-1]))

// function findMinimum(arr) {
//     var currentMin = arr[0];
//     //At every Index compare its value with current minimum 
//     //and if its less, then make that index value the new minimum value
//     for (let val of arr) {
//         if (val < currentMin)
//             currentMin = val
//     }

//     return currentMin

// }

// console.log(findMinimum([9,2,3,6]))