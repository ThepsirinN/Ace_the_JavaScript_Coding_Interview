// Problem Statement
// Implement the function reverseK(queue, k), which takes a queue and a number “k” as input and reverses the first “k” elements of the queue.

// An illustration is also provided for your understanding.

// Input
// A queue and an integer k such that 0
// ≤
// ≤
//  k
// ≤
// ≤
//  size of the queue

// Output
// Queue with first k elements reversed

// Sample Input
// Queue = [1,2,3,4,5,6,7,8,9,10]    k = 5
// Sample Output
// result = [5,4,3,2,1,6,7,8,9,10]

const Stack = require("../2.3.1_Stack/Stack.js")
const Queue = require("../2.3.2_Queue/Queue")

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10)

// queue.printQueue()

const reverseK = (queue, k) => {
    const tempStack = new Stack()
    const tempQueue = new Queue()
    let count = 0
    while (count < k) {
        tempStack.push(queue.dequeue())
        count++
    }

    count = 0
    while (count < k){
        tempQueue.enqueue(tempStack.pop().data)
        count++
    }

    while(queue.tail){
        tempQueue.enqueue(queue.dequeue())
    }
    return tempQueue

}

reverseK(queue, 5)

queue.printQueue()

// alternative
// if (queue.isEmpty()){
//     return
// }

// const tempStack = new Stack()
// let count = 0
// while (count < k){
//     tempStack.push(queue.dequeue())
//     count++
// }

// while(!tempStack.isEmpty()){
//     queue.enqueue(tempStack.pop())
// }

// count = 0 
// let remain = queue.size() - k
// while(count < remain){
//     queue.enqueue(queue.dequeue())
//     count++
// }

// return queue;

// Solution (less memory use)
// function reverseK(queue, k) {
//     if (queue.isEmpty() == false) {
//         let myStack = new Stack();
//         var count = 0;
//         while (count < k) {
//             myStack.push(queue.dequeue())
//             count++;
//         }
       
//         while (myStack.isEmpty() == false) {
//             queue.enqueue(myStack.pop());

//         }

//         for (var i = 0; i < (queue.size() - k); i++) {
//             queue.enqueue(queue.dequeue());
//         }
//     }

//     return queue;
// }
