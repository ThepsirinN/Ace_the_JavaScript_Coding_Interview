// Problem Statement
// Implement a function called maxMin(arr), which will rearrange the elements of a sorted array so that the first position will have the largest number, the second will have the smallest, and the third will have the second-largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order, and the even-numbered indices will have the smallest numbers in ascending order.

// Note: The given array is sorted in ascending order.

// Input
// A sorted array

// Output
// An array with elements stored in max/min form

// Sample Input
// arr = [1,2,3,4,5]
// Sample Output
// arr = [5,1,4,2,3]

function maxMin(arr){
    let returnArr = []
    let i = 0
    let arrLen = arr.length
    let midArrLen = Math.floor(arrLen / 2)
    while(i<=midArrLen){
      if(arr[arrLen-i-1] !== arr[i]){
        if (arr[arrLen-i-1]){
          returnArr = [...returnArr,arr[arrLen-i-1]]
        }
        if(arr[i]){
          returnArr = [...returnArr,arr[i]]
        }
      }else{
        returnArr = [...returnArr,arr[i]]
      }
      i++
    }
    return returnArr;
  }

// solution

// function maxMin(arr) {
//     var result = []
//     for (var i = 0; i < (Math.floor(arr.length / 2)); i++) {
//         result.push(arr[arr.length - (i + 1)])
//         result.push(arr[i])
//     }

//     if (arr.length % 2)
//         result.push(arr[Math.floor(arr.length / 2)])
//     return result
// }
// console.log(maxMin([1,2,3,4,5,6,7]))

// function maxMin(arr) {
//     var maxIdx = arr.length-1
//     var minIdx = 0
//     var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array 
//     for( var i = 0; i < (arr.length); i++) {
//       // at even indices we will store maximum elements
//       if (i % 2 == 0){  
//         arr[i] += Math.floor((arr[maxIdx] % maxElem ) * maxElem)
//         maxIdx -= 1
//       }
//       else { // at odd indices we will store minimum elements
//         arr[i] += Math.floor((arr[minIdx] % maxElem ) * maxElem)
//         minIdx += 1
//       }
//     }
//     // dividing with maxElem to get original values.
//     for( var i = 0; i < (arr.length); i++) {
//       arr[i] = Math.floor(arr[i] / maxElem)
//     }
//     return arr
// }

// arr = [1,2,3,4,5,6,7,8,9];
// console.log("Array before min/max:")
// console.log(arr)
// console.log("Array after min/max: ")
// console.log(maxMin(arr))