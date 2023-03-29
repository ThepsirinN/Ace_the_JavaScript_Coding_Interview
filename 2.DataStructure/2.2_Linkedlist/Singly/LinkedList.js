const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Check if empty method
  isEmpty() {
    return this.head === null;
  }

  // insert at head
  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    // old
    /* if (this.isEmpty()) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } */
  }

  // insert at tail
  insertAtTail(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let tmp = this.head;
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = newNode;

      /* while (tmp) {
        if (tmp.next === null) {
          tmp.next = newNode;
          break;
        }
        tmp = tmp.next;
      } */
    }
  }

  search(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.data === value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  // delete at head like shift
  deleteAtHead() {
    if (this.head) {
      this.head = this.head.next;
      return true;
    }
    return false;
  }

  // delete by value
  deleteVal(value) {
    if (this.isEmpty()) {
      return false;
    }
    let tmp = this.head;
    // for the first node
    if (tmp.data === value) {
      this.deleteAtHead();
      return true;
    }
    //after first node
    while (tmp.next) {
      if (tmp.next.data === value) {
        tmp.next = tmp.next.next;
        return true;
      }
      tmp = tmp.next;
    }
  }

  // delete at tail
  deleteAtTail() {
    // if empty
    if (this.isEmpty()) {
      return false;
    }

    let tmp = this.head;
    // if first
    if (!tmp.next) {
      this.deleteAtHead();
      return false;
    }

    // go to last node
    while (tmp.next.next) {
      tmp = tmp.next;
    }
    tmp.next = null;
    return true;
  }
}

// find the linkedlist length
function lengthList(list) {
  if (list.isEmpty()) {
    return 0;
  }
  let count = 1;
  let tmp = list.head;
  while (tmp.next) {
    count++;
    tmp = tmp.next;
  }
  return count;
}

// remove duplicate
function removeDuplicates(list) {
  // I think we can use OBJ to prevent bruteforce
  if (list.isEmpty()) {
    return 0;
  }
  let tmp = list.head;
  while (tmp) {
    let currentNode = tmp;
    while (currentNode.next) {
      if (currentNode.next.data === tmp.data) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    tmp = tmp.next;
  }
}

// Union linkedlist
function union(list1, list2) {
  if (list1.isEmpty() && list2.isEmpty()) {
    return;
  } else if (list1.isEmpty() && !list2.isEmpty()) {
    removeDuplicates(list2);
    return list2;
  } else if (!list1.isEmpty() && list2.isEmpty()) {
    removeDuplicates(list1);
    return list1;
  }



  // Preventing modify original data and return string
  /* // copy *prevent modify list
  let tmpListObj = JSON.parse(JSON.stringify(list1));

  let tmp = tmpListObj.head;
  while (tmp.next) {
    tmp = tmp.next;
  }
  tmp.next = JSON.parse(JSON.stringify(list2)).head;
  // we can use remove is empty but it is obj
  let tmpObj = tmpListObj.head;
  let returnTmpArr = [tmpObj.data];
  while (tmpObj.next) {
    if (!returnTmpArr.includes(tmpObj.next.data)) {
      returnTmpArr.push(tmpObj.next.data);
    }
    tmpObj = tmpObj.next;
  }
  return returnTmpArr; */
}

// Intersect linkedlist
function intersect(list1, list2) {
  let tmp1 = list1.head;
  let tmp2 = list2.head;
}

const ll = new LinkedList();
const ll2 = new LinkedList();

// Check if Empty
// console.log(ll.isEmpty());

// Insert at head
ll.insertAtHead(2);
// ll.insertAtHead("456");
ll.insertAtHead(7);

// Insert at tail
ll.insertAtTail(2);
// ll.insertAtTail(2);

// delete firstItem
// ll.deleteAtHead()

// delete by value
// ll.deleteVal("123");

// delete at tail
// ll.deleteAtTail();

// remove duplicate
// removeDuplicates(ll);

/* display 3 element */
// console.log(ll.head);

// finding the list length
// console.log(lengthList(ll));

// search
// console.log(ll.search("123"));

// union
ll2.insertAtHead(5);
ll2.insertAtHead(2);
console.log(union(ll, ll2));
