class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < current.value){
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }
  // search if value is in the tree
  find(value) {
    if (!this.root) return false;
    var current = this.root;
    while (true) {
      if (current.value === value) return true;
      if (value > current.value) {
        if (!current.right) return false;
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
  // breadth first search
  BFS() {
    var data = [],
        queue = [],
        node = this.root;
    queue.push(node);
    // not while (queue) because empty arrays are truthy
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DFS - recursion - Preorder - left first (top to bottom)
  DFSPreOrder() {
    var data = [],
        current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  // DFS postorder - bottom to top - push at the end
  DFSPostOrder() {
    var data = [];
    var current = this.head;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }
  // DFS In order - bottom to top - left side first
  DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

debugger;
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree);

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);
// console.log(tree.find(18));

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());

//    10
//   6  15
// 3  8  20

// pre order - 10,6,3,8,15,20 - (top left to bot right) (push first)
// post order - 3,8,6,20,15,10 (bot left right to top) (push last)
// in order - 3,6,8,10,15,20(bot left branch  to top) (push mid)
