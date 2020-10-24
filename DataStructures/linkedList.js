// Linked Lists
// Methods:
//  push()
//  pop()
//  get(index)
//  delete(index) -> Not implemented yet
//  isEmpty()

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    push(value) {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
    pop() {
      // If list is Empty
      if (this.isEmpty()) {
        return null;
      } else if (this.length === 1) {
        // One node in the list
        const nodeToRemove = this.head;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return nodeToRemove;
      } else {
        //Multiple nodes in the list
        let currentNode = this.head;
        //  Save value to return
        const nodeToRemove = this.tail;
        //   Our new tail
        let secondToLastNode;
        // Search for the tail: O(n)
        while (currentNode) {
          if (currentNode.next === this.tail) {
            secondToLastNode = currentNode;
            break;
          }
          currentNode = currentNode.next;
        }
  
        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.length--;
        return nodeToRemove;
      }
    }
    get(index) {
      //   Handling edge cases
      if (index < 0 || index > this.length || this.isEmpty()) {
        return null;
      }
      // For the first node
      if (index === 0) {
        return this.head;
      }
      // If we want last node
      if (index === this.length - 1) {
        return this.tail;
      }
  
      // If node is somewhere in the middle
      let currentNode = this.head;
      let iterator = 0;
  
      while (iterator < index) {
        iterator++;
        currentNode = currentNode.next;
      }
  
      return currentNode;
    }
  }