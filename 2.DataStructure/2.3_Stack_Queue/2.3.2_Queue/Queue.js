const DNode = require("../DNode")

class Queue {
    // Implementing with doubly linked list
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty() {
        return this.head === null
    }

    enqueue(data) {
        const newNode = new DNode(data)
        this.length++
        if (!this.isEmpty()) {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
            return
        }
        
        this.head = this.tail = newNode
        return
    }

    size() {
        return this.length
    }

    peek(){
        return this.tail.data
    }

    deque(){
        if(this.isEmpty()){
            return null
        }
        this.length--
        const newNode = new DNode(this.tail.data)
        this.tail = this.tail.prev
        this.tail.next = null
        return newNode.data
    }

    printQueue(){
        let tmp = this.tail
        let count = 1
        while(tmp){
            console.log(count + ".",tmp.data)
            tmp = tmp.prev
            count++
        }
    }
}

const queue = new Queue()
queue.enqueue("Barko1")
queue.enqueue("Barko2")
queue.enqueue("Barko3")
// console.log(queue.peek())
// console.log(queue.deque())
console.log(queue.size())
console.log(queue.head)
console.log("======================================================")
console.log(queue.tail)
queue.printQueue()
