// Problem Statement#
// In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.

// Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.

// Input
// An array and a number value

// Output
// An array with two integers a and b ([a,b]) that add up to value

// Sample Input
// arr = [1,21,3,14,5,60,7,6]
// value = 81
// Sample Output
// arr = [21,60]

function findSum(arr,value){
    // two sum in leetcode
    let obj = {}
    let solution
    for(let element of arr){
        obj[element] = element
        solution = value - element
        if (obj[solution]){
            return [obj[solution],element]
        }
    }
    return false
}

// solution

// function findSum(arr, value) {
//     for (var j =0; j<arr.length; j++) {
//        for (var k = j+1; k<arr.length; k++) {
//             if ((arr[j] + arr[k]) == value)
//                 return [arr[j], arr[k]]
//         }
//     }
//     return false;
// }

// console.log(findSum([1, 2, 3, 4], 6))
// console.log(findSum([1, 2, 3, 4], 10))


// function binarySearch(arr, item){
//     var first = 0, mid;
//     var last = arr.length - 1;
//     var found = false
//     var arrayIndex = -1
//     while( (first <= last) && !found){
//         mid = Math.floor((first + last) / 2)
//         if( arr[mid] == item){
//             arrayIndex = mid
//             found = true
//         }
//         else{
//             if(item < arr[mid])
//                 last = mid - 1
//             else
//                 first = mid + 1
//         }
//     }
//     if (found)
//          return arrayIndex
//      else
//          return false
//  }
 
//  function findSum(arr,value){
//     arr.sort(function(a, b) {
//          return a - b
//      })
//  var index;
//   for(var j = 0; j<arr.length; j++){
//     index = binarySearch(arr,(value-arr[j]))
//     if(index!=false && j!=index)
//       return [arr[j],value-arr[j]]
//   }
//    return false;
// } 

// console.log(findSum([1,2,3,4],5))
// console.log(findSum([4,3,2,1],9))

// function findSum(arr, value) {

//     arr.sort(function(a, b) {
//         return a - b
//     })

//     var index1 = 0,
//         index2 = arr.length - 1,
//         result = [],
//         sum = 0;

//     while (index1 != index2) {
//         sum = arr[index1] + arr[index2]

//         if (sum < value) {
//             index1++;
//         } else if (sum > value) {
//             index2--;
//         } else {
//             result.push(arr[index1]);
//             result.push(arr[index2]);
//             return result;

//         }
//     }
//   return false;
// }

// console.log(findSum([1,2,3,4],5))
// console.log(findSum([1,2,3,4],10))