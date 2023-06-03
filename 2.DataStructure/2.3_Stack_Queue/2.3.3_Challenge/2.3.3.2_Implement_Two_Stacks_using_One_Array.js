// Problem Statement
// Write code for the following functions to implement two stacks using a single array of a fixed size to store the elements.

// Function Prototypes
// push1(value)
// push2(value):
// pop1():
// pop2():
// Input/Output
// push1(value)

// Input: an integer

// Output: inserts the given value in the first stack, i.e., stack1

// push2(value)

// Input: an integer

// Output: inserts the given value in the second stack i.e., stack2

// pop1()

// Output: returns and remove the top value of stack1

// pop2()

// Output: returns and remove the top value of stack2

// Note: s is the maximum size that the array can have, and it is passed to the constructor of the class twoStacks.

// implementing with node and return with array
// const Node = require("../Node")
// const DNode = require("../Node")

// class twoStacks {
//     constructor(s) {
//         this.head = null
//         this.tail = null
//         this.headLength = 0
//         this.tailLength = 0
//         this.max = s
//     }

//     push1(value) {
//         if (this.headLength + 1 > Math.ceil(this.max / 2)) {
//             return -1
//         }
//         // let newNode = new DNode(value)
//         // this.headLength++
//         // // insert at tail of doubly linkedlisr
//         // if (this.head) {
//         //     this.head.next = newNode
//         //     newNode.prev = this.head
//         // }

//         let newNode = new Node(value)
//         this.headLength++
//         if (this.head) {
//             newNode.next = this.head
//         }

//         this.head = newNode
//         return
//     }

//     push2(value) {
//         if (this.tailLength + 1 > Math.floor(this.max / 2)) {
//             return -1
//         }
//         let newNode = new Node(value)
//         this.tailLength++

//         if (this.tail) {
//             newNode.next = this.tail
//         }

//         this.tail = newNode
//         return
//     }

//     pop1() {
//         if (this.headLength === 0) {
//             return null
//         }

//         this.headLength--
//         const data = this.head.data
//         // for doubly linkes list
//         // this.head = this.head.prev
//         // if (this.head) {
//         //     this.head.next = null
//         // }
//         this.head = this.head.next

//         return data
//     }

//     pop2() {
//         if(this.tailLength == 0 ){
//             return null
//         }

//         this.tailLength--
//         const data = this.tail.data
//         this.tail = this.tail.next
//         return data
//     }

//     print() {
//         let returnArr = []
//         let popResult = null
//         while(true){
//             popResult = this.pop1()
//             if(popResult == null){
//                 break
//             }
//             returnArr.push(popResult)
//         }

//         while(true){
//             popResult = this.pop2()
//             if(popResult == null){
//                 break
//             }
//             returnArr.push(popResult)
//         }
//         return returnArr
//     }
// }

// let twoStack = new twoStacks(8)
// twoStack.push1(1)
// twoStack.push1(2)
// twoStack.push1(3)
// twoStack.push1("x")
// twoStack.push1("miss")
// twoStack.push2(4)
// twoStack.push2(5)
// twoStack.push2(6)
// twoStack.push2(7)
// twoStack.push2("miss")

// console.log(twoStack.print())

// implementing with array
class twoStacks {
    constructor(s) {
        this.arr = []
        this.top = 0
        this.bottom = 0
        this.length = s
    }

    push1(value) {
        if (this.top === this.length - this.bottom) {
            return -1
        }

        if (this.top + this.bottom < this.length) {
            this.arr[this.top] = value
            this.top++
        }
    }

    push2(value) {
        if (this.top === this.length - this.bottom) {
            return -1
        }

        if (this.top + this.bottom < this.length) {
            this.arr[this.length - this.bottom - 1] = value
            this.bottom++
        }
    }

    pop1() {
        if(this.top==0){
            return null
        }
        
        const data = this.arr[this.top - 1]
        this.arr[this.top - 1] = undefined      
        this.top--
        return data
    }

    pop2() {
        if(this.top==0){
            return null
        }

        const data = this.arr[this.length - this.bottom ]
        this.arr[this.length - this.bottom] = undefined
        this.bottom--
        return data
    }
}

const twostack = new twoStacks(6)
twostack.push1(0)
twostack.push1(1)
twostack.push1(2)
twostack.push2(5)
twostack.push2(6)
twostack.push2(7)
console.log(twostack.pop2())
console.log(twostack.arr)

// Solution

// class twoStacks {
//     constructor(s) {
//         this.arr = [];
//         this.top1 = -1;
//         this.top2 = s;
//         this.size = s;

//     }

//     push1(value) {
//         if (this.top1 < this.top2 - 1) {
//             this.top1 += 1
//             this.arr[this.top1] = value;
//         }

//     }

//     push2(value) {
//         if (this.top1 < this.top2 - 1) {
//             this.top2 -= 1
//             this.arr[this.top2] = value
//         }

//     }

//     pop1() {
//         if (this.top1 >= 0) {
//             let value = this.arr[this.top1];
//             this.top1 -= 1
//             return value;
//         } else {
//             return -1;
//         }


//     }

//     pop2() {

//         if (this.top2 < this.size) {
//             let val = this.arr[this.top2]
//             this.top2 += 1
//             return val
//         } else {
//             return -1;
//         }
//     }

// }
            
// var stack = new twoStacks(10)
// stack.push1(20)
// stack.push2(10)
// stack.push1(30)
// stack.push2(40)
// stack.push1(60)
// stack.push2(50)

// console.log(stack.pop1())
// console.log(stack.pop2())
// console.log(stack.pop1())
// console.log(stack.pop1())
// console.log(stack.pop2())
// console.log(stack.pop2())

// console.log(stack.pop1())
// console.log(stack.pop2())
