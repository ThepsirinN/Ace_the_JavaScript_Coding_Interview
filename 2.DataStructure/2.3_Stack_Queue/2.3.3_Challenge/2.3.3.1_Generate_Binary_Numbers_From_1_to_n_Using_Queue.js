// Problem Statement#
// Implement a function findBin(n), which will generate binary numbers from
// 1
// to
// n
//  in the form of a string using a queue. An illustration is also provided for your understanding.

// Input
// A positive integer n

// Output
// Returns binary numbers in the form of strings from 1 up to n

// Sample Input
// n = 3
// Sample Output
// result = ["1","10","11"]

const Queue = require("../2.3.2_Queue/Queue")

const findBin = (number) => {
    let queue = new Queue()
    queue.enqueue(1)
    let count = 0
    let returnArr = []
    while (count < number) {
        returnArr.push(queue.dequeue())
        b1 = returnArr[count] * 10
        b2 = returnArr[count] * 10 + 1
        queue.enqueue(b1)
        queue.enqueue(b2)
        count++
    }
    return returnArr
}

console.log(findBin(8))

// solution

"use strict";

// function findBin(n) {
//     let result = [];
//     let myQueue = new Queue();
//     var s1, s2;
//     myQueue.enqueue("1");
//     for (var i = 0; i < n; i++) {

//         result.push(myQueue.dequeue());
//         s1 = result[i] + "0";
//         s2 = result[i] + "1";

//         myQueue.enqueue(s1);
//         myQueue.enqueue(s2);

//     }

//     return result;
// }

// console.log(findBin(10))

