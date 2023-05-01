// Problem Statement#
// Implement a function rightRotate(arr,n) that will rotate the given array by n.

// Input
// An array and a number by which to rotate that array

// Output
// The given array rotated by n elements

// Sample Input
// arr = [1,2,3,4,5]
// n = 3
// Sample Output
// arr = [3,4,5,1,2]

/* function rightRotate(arr,n){
  let i = 1
  while(i<=n){
    let popElement = arr.pop()
    arr.unshift(popElement)
    i++
  }
  return arr; 
} */

function rightRotate(arr,n){
    let returnArr = [...arr]
    let i = 1
    let arrLen = returnArr.length
    let lastElemet
    while(i<=n){
      lastElemet = returnArr[arrLen-1]
      returnArr.length = arrLen-1
      returnArr = [lastElemet,...returnArr]
      i++
    }
    return returnArr; 
  }

// solution

// function rightRotate(arr, n){ 
//     var rotatedList = [] 
//     for(var item=arr.length-n;item<arr.length;item++) 
//       rotatedList.push(arr[item]) 
//     for(var item=0;item<arr.length-n;item++)
//       rotatedList.push(arr[item]) 
//     return rotatedList 
// }

// console.log(rightRotate([1,2,3,4,5], 3))

// function rightRotate(arr, n) {
//     return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
// }
//   console.log(rightRotate([1,2,3,4,5], 3))