// Problem Statement
// Implement a function findSecondMaximum(arr), which returns the second largest element in the array.

// Note 1: Input array will contain at least two unique elements.

// Note 2: Input array will not contain Number.NEGATIVE_INFINITY value.

// Input
// An array of integers

// Output
// The second largest element in the array

// Sample Input
// [9,2,3,6]
// Sample Output
// 6

function findSecondMaximum(arr) {
    let max = Number.MIN_SAFE_INTEGER 
    let secondMax = Number.MIN_SAFE_INTEGER
    for(let i of arr){
        if (i > max){
            max = i
        }
    }
    for(let j of arr){
        if(j> secondMax && j < max){
            secondMax = j
        }
    }
    return secondMax;
    // or sort and select element 2 if it is valid
}


// function findSecondMaximum(arr){
//     arr.sort(function(a, b) {
//           return a - b
//       })
//     if(arr.length >= 2)
//       return arr[arr.length-2]
//     else
//       return null
//   }
  
//   console.log(findSecondMaximum([9,2,3,6]))

// function findSecondMaximum(arr){
//     var firstMax = Number.NEGATIVE_INFINITY;
//     var secondmax = Number.NEGATIVE_INFINITY;
//     for(let item of arr){
//       if( item > firstMax)
//         firstMax = item
//     }
//     for(let item of arr){
//       if ((item < firstMax) && (item > secondmax))
//         secondmax = item
//     }
//     return secondmax
//   }
  
//   console.log(findSecondMaximum([9,2,3,6]))

// function findSecondMaximum(arr) {
//     var max = Number.NEGATIVE_INFINITY;
//     var secondmax = Number.NEGATIVE_INFINITY;
//     for (var val of arr) {
//         if (val > max) {
//             secondmax = max
//             max = val
//         } else if (val > secondmax && val!=max)
//             secondmax = val
//     }
//     return secondmax
// }

// console.log(findSecondMaximum([9,2,3,6]))