class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(node) {
    const n = new Node(node);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      n.nextNode = this.head;
      this.head = n;
    }
  }

  append(node) {
    const n = new Node(node);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.nextNode = n;
      this.tail = n;
    }
  }

  size() {
    if (this.head == null) return 0;
    let i = 1;
    let n = this.head;
    while (n.nextNode != null) {
      n = n.nextNode;
      i++;
    }
    return i;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(x) {
    if (this.head == null) return null;
    let n = this.head;
    while (x--) {
      if (n === null) return null;
      n = n.nextNode;
    }
    return n;
  }

  pop() {
    if (this.head == this.tail) {
      this.head == null;
      this.tail == null;
    } else {
      let n = this.head;
      while (n.nextNode.nextNode != null) {
        n = n.nextNode;
      }
      n.nextNode = null;
      this.tail = n;
    }
  }

  contains(input) {
    // default if no nodes
    if (this.head == null) return false;

    let n = this.head;
    while (n.nextNode != null) {
      if (n.value == input) return true;
      n = n.nextNode;
    }
    return n.value == input ? true : false;
  }

  find(input) {
    // default if no nodes
    if (this.head === null) return null;

    let i = 0;
    let n = this.head;
    while (n.value != input) {
      if (n.nextNode == null) return null;
      n = n.nextNode;
      i++;
    }

    if (n.value == input) return i;
    return null;
  }

  toString() {
    let string = "";
    let n = this.head;
    while (n != null) {
      string = `${string}(${n.value}) -> `;
      n = n.nextNode;
    }
    string = `${string} null`;
    return string;
  }
}

module.exports = {
  LinkedList,
  Node,
};
