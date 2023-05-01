// Problem Statement
// Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.

// Input
// An array with random integers.

// Output
// An array with only odd integers

// Sample Input
// [1,2,4,5,10,6,3]
// Sample Output
// [1,5,3]

function removeEven(arr) {
    let i = 0
    let arrLength = arr.length
    let returnArr = []
    while(i<arrLength){
        if(arr[i] % 2 !== 0 ){
            returnArr.push(arr[i])
        }
        i++
    }
    return returnArr
}

// solution
// function removeEven(arr) {
//     var odds = []
//     for (let number of arr) {
//         if (number % 2 != 0) // Check if the item in the list is NOT even ('%' is the modulus symbol!)
//             odds.push(number) //If it isn't even append it to the empty list
//     }
//   return odds // Return the new list
// }
// console.log(removeEven([3, 2, 41, 3, 34]))