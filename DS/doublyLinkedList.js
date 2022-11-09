class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // easier than singly linked - start from tail
    if (!this.head) {
      return undefined;
    }
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    var oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //update prev
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    // depending on index, traverse from the end or the beginning
    if (index < 0 || index >= this.length) return null;
    var current, count;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count !== index) {
        count++;
        current = current.next;
      }
      return current;
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        count--;
        current = current.prev;
      }
      return current;
    }
  }
  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var afterNode = prevNode.next;

    prevNode.next = newNode, newNode.prev = prevNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift(val);
    if (index === this.length - 1) return this.pop(val);
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = removedNode.next, afterNode.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
debugger;
list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
list.remove(1);
console.log(list.get(1))
console.log(list);