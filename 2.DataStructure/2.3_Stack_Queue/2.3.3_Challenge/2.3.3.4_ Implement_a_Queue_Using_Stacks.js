// Problem Statement
// You have to implement the enqueue() and dequeue() functions using the myStack class we created earlier. enqueue() will insert a value into the queue, and dequeue() will remove a value from the queue.

// Input
// enqueue(): A value to insert into the queue.

// dequeue(): Does not require inputs.

// Output
// enqueue(): Returns True after inserting the value into the queue.

// dequeue(): Pops out and returns the oldest value in the queue.

// Sample Input
// value = 5 
// //[1, 2, 3, 4] existing queue front:1 back:4
// enqueue(value)
// dequeue()
// Sample Output
// True //[1, 2, 3, 4, 5]
// 1 //[2, 3, 4, 5]

const StackArray = require("../2.3.1_Stack/Stack(Array)")

// with stack array
class newQueue {
    constructor() {
        this.stack = new StackArray()
    }
    enqueue(value) {
        this.stack.push(value)
        return true
    }

    dequeue() {
        if(this.stack.isEmpty()){
            return false
        }
        return this.stack.items.shift();
    }

}