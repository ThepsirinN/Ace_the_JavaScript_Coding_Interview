const Node = require("./Node")

class DoublelyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isHeadEmpty() {
        return this.head === null
    }

    isTailEmpty() {
        return this.tail === null
    }

    insertAtHead(data) {
        this.length++
        let newNode = new Node(data)
        if (!this.isHeadEmpty()) {
            // console.log('head',this.head)
            // console.log('tail',this.tail)
            // console.log("--------------------------------------")
            this.head.prev = newNode
            // console.log('heada1',this.head)
            // console.log('taila1',this.tail)
            // console.log("--------------------------------------")
            newNode.next = this.head
            // console.log('heada2',this.head)
            // console.log('taila2',this.tail)
            // console.log("--------------------------------------")
            this.head = newNode
            // console.log('heada3',this.head)
            // console.log('taila3',this.tail)
            // console.log("--------------------------------------------------------------------------------------------------")
            return
        }
        this.head = this.tail = newNode
        return
    }

    insertAtTail(data) {
        this.length++
        let newNode = new Node(data)
        if (!this.isTailEmpty()) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            return
        }

        this.tail = this.head = newNode
        return
    }

    deleteAtHead() {
        if (this.isHeadEmpty()) {
            return false
        }
        this.head = this.head.next
        if (this.isHeadEmpty()) {
            this.tail = null
            return true
        }
        this.head.prev = null
        return true
    }

    deleteAtTail() {
        if (this.isTailEmpty()) {
            return false
        }

        this.tail = this.tail.prev
        if (this.isTailEmpty()) {
            this.head = null
            return true
        }
        this.tail.next = null
        return true
    }

    findNth(n) {
        // n is 0 to this.length - 1
        if (n > this.length - 1 || n < 0) {
            return null
        }

        let count = 0

        let selectedList = this.head
        let stop = n
        let key = "next"

        if (n > this.length / 2) {
            selectedList = this.tail
            stop = this.length - n - 1
            key = "prev"
        }

        while (count !== stop) {
            selectedList = selectedList[key]
            count++
        }
        return selectedList
    }

    insertIndex(value, id) {

        if (id > this.length - 1) {
            console.log("can't insert")
            return
        }

        if (id === 0) {
            this.insertAtHead(value)
            return
        }

        if (id === this.length -1) {
            this.insertAtTail(value)
            return
        }
        
        let validNth = this.findNth(id)
        if(!validNth){
            console.log("can't insert")
            return
        }

        let newNode = new Node(value)
        newNode.next = validNth.next
        newNode.next.prev = newNode
        validNth.next = newNode
        validNth.next.prev = validNth
    }

    deleteIndex(id) {
        let tempList = this.findNth(id)
        if (!tempList) {
            console.log("can't Delete")
        }

        if (id === 0) {
            this.deleteAtHead()
            return
        }

        if (id === this.length - 1) {
            this.deleteAtTail()
            return
        }

        tempList.prev.next = tempList.next
        tempList.next.prev = tempList.prev
        return
    }

    search(value, from) {
        let count = 0
        let key = "next"
        let tmp = this.head

        if (from === "tail") {
            tmp = this.tail
            key = "prev"
        }

        while (tmp) {
            if (tmp.data === value) {
                // return this.length - count - 1
                return tmp
            }
            tmp = tmp[key]
            count++
        }
        return false
    }

    deleteVal(value, from) {
        let tmpList = this.search(value, from)
        if (!tmpList) {
            console.log("can't delete")
        }
        // for start element
        if (!tmpList.prev && tmpList.next) {
            this.deleteAtHead()
            return
        }
        // for ending element
        else if (tmpList.prev && !tmpList.next) {
            this.deleteAtTail()
            return
        }

        tmpList.prev.next = tmpList.next
        tmpList.next.prev = tmpList.prev
        return
    }
}

const DLL = new DoublelyLinkedList()
//DLL.insertAtHead("1")
// console.log(DLL.head)
// console.log(DLL.tail)
// DLL.insertAtHead("5")
// DLL.insertAtHead("4")
DLL.insertAtHead("3")
DLL.insertAtHead("2")
DLL.insertAtHead("1")
DLL.insertAtHead("0")
// DLL.insertAtTail("0")
// DLL.insertAtTail("1")
// DLL.deleteAtHead()
// DLL.deleteAtTail()
// console.log(DLL.head)
// console.log(DLL.tail)
// console.log(DLL.findNth(0))
// DLL.deleteIndex(4)
// console.log(DLL.search("5","tail"))
// DLL.deleteVal("5","tail")
DLL.insertIndex("1234", 1)
console.log(DLL.tail.prev)
