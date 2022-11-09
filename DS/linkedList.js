// debugger;
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // if one item in the list, set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    var temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }
  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  //get an existing node
  get(index) {
    var count = 0;
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
  }
  //update an existing node
  set(index, value) {
    var node = this.get(index);
    if (!node) {
      return false;
    } else {
      node.val = value;
      return true;
    }
  }
  //insert a new node at an index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    //!! converts to reverse boolean
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    var prev = this.get(index - 1);
    var newNode = new Node(value);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;

  }
  // remove from specific position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  // helpful print
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // reverse - traverse and reverse (NOT A COPY)
  reverse() {
    // swap head and tail
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next = null;
    var prev = null;

    for (var i = 0; i < this.length; i++) {
      // prepping next value
      next = node.next;
      // shift direction
      node.next = prev;
      //shift along link list
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
console.log(list.push("1"));
console.log(list.push("2"));
console.log(list.push("3"));
console.log(list.push("4"));
list.print();
console.log(list.reverse());
list.print();