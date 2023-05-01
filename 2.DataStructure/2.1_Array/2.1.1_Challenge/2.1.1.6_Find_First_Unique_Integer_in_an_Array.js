// Problem Statement
// Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.

// Note: The function should return null if no unique number is found.

// Input
// An array of integers

// Output
// The first unique element in the array

// Sample Input
// [9,2,3,2,6,6]
// Sample Output
// 9

function findFirstUnique(arr) {
    let obj = {}
    for(let i of arr){
       if(obj[i]){
          obj[i] = obj[i] + 1
       }else{
          obj[i] = 1
       }
    }
    for(let j of arr){
       if(obj[j] === 1){
          return j
       }
    }
 }

//  function findFirstUnique(arr){
//     var index2;
//       for(var index1=0;index1<arr.length;index1++){ 
//           index2 = 0
//           while(index2 < arr.length){
//               if ((index1 != index2 )&& (arr[index1] == arr[index2])) 
//                   break
//               index2 += 1
//       }
//           if (index2 == arr.length) 
//               return arr[index1] 
     
//     }
//       return null;
//   }
    
//   console.log(findFirstUnique([ 9, 2, 3, 6,2, 6 ,9,0,3]))