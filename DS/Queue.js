class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// pop is slow in singly linked list so add to the end (enqueue / push) and remove from beginning (dequeue / shift)

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

debugger;
var q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
console.log(q.dequeue());
console.log(q);

