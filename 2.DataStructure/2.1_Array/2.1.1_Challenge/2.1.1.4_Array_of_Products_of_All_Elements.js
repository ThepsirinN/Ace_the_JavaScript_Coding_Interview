// Problem Statement
// Implement a function, findProduct(arr), which modifies an array so that each index has a product of all the numbers present in the array except the number stored at that index.
// Note: The size of an array should be greater than or equal to 2.

// Input
// An array of numbers (can even be floats, integers, and negative!)

// Output
// An array such that each index has a product of all the numbers in the array except the number stored at that index.

// Sample Input
// arr = [1,2,3,4]
// Sample Output
// arr = [24,12,8,6]

function findProduct(arr) {
    let initialArr = [...arr]
    let returnArr = []
    let i = 0
    let arrLength = arr.length
    while(i<arrLength){
        let sum = 1
        for(let j in initialArr){
            if(j != i){
                sum *= initialArr[j]
            }
        }
        returnArr.push(sum)
        i++
    }
    
    return returnArr;
}

// solution

// function findProduct(arr){
//     var result = []
//     var left = 1, currentproduct;
//     //To store product of all previous values from currentIndex
//     for(var i=0;i<arr.length;i++){
//       currentproduct = 1
//       //To store current product for index i    
//           //compute product of values to the right of i index of list
//       for(var j=i+1;j<arr.length;j++){
//         currentproduct = currentproduct * arr[j]
//       }
//       //currentproduct * product of all values to the left of i index
//       result.push(currentproduct * left)
//       //Updating `left`
//       left = left * arr[i]
//     }
      
//     return result
//   }
//   console.log(findProduct([1,2,3,4,5]))

// function findProduct(arr) {
//     var temp = 1,
//         product = [];
//     for (var i = 0; i < arr.length ; i++) {
//         product[i]  = temp;
//         temp = temp * arr[i];
//     }

//     temp = 1;
//     for (var i = arr.length - 1; i > -1; i--) {
//         product[i] *= temp;
//         temp *= arr[i];
//     }

//     return product
// }

// console.log(findProduct([1,3,4,5]))