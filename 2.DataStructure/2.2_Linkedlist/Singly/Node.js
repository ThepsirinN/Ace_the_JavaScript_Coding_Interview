class Node{
    constructor(data=null){
        this.data = data
        this.next = null
    }
}
module.exports = Node

// Circular
/* const node1 = new Node("Hello")
const node2 = new Node("World")
node1.next = node2
node2.next = node1

console.log(node1.next.next.next.next.next.next.next)
console.log(node2.next.next.next.next.next.next.next) */
