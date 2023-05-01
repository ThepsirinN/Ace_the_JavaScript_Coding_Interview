// Problem Statement
// Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

// Input:
// Two sorted arrays.

// Output:
// A merged sorted array consisting of all elements of both input arrays.

// Sample Input
// arr1 = [1,3,4,5]  
// arr2 = [2,6,7,8]
// Sample Output
// arr = [1,2,3,4,5,6,7,8]

function mergeArrays(arr1, arr2) {
    /* let returnArr = [...arr1,...arr2] */
    /* return returnArr.sort((a,b)=>(a-b)) */
    return [...arr1,...arr2].sort((a,b)=>a-b)
    /* return arr1.concat(arr2).sort((a,b)=>a-b); */
}

// solution
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeArrays([4,5,6],[-2,-1,0,7]))