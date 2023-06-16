const Node = require("../Node")

class Stack {
    constructor() {
        this.items = null
        this.top = null
        this.length = 0
    }

    getTop() {
        if (this.size() == 0) return null
        return new Node(this.top.data)
    }

    isEmpty() {
        return this.items === null
    }

    size() {
        return this.length
    }

    push(element) {
        const newNode = new Node(element)
        this.top = newNode
        this.length++
        if (this.isEmpty()) {
            this.items = newNode
            return
        }
        newNode.next = this.items
        this.items = newNode
        return
    }

    pop() {
        if (!this.isEmpty()) {
            let tempNode = new Node(this.top.data)
            this.items = this.items.next
            this.top = this.items
            this.length--
            return tempNode
        }
        return null
    }
}

module.exports = Stack

// const ST = new Stack()
// ST.push(1)
// ST.push(2)
// ST.push(9)
// ST.push(8)
// console.log(ST.pop())
// console.log(ST.getTop())
// console.log(ST.pop())
// console.log(ST.getTop())
// console.log(ST.items)
// console.log(ST.size())
// console.log(ST.isEmpty())
