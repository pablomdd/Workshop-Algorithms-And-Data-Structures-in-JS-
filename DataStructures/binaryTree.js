export class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

const BINARY_TREE_TRAVERSALS = {
  IN_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSALS.IN_ORDER(node.leftChild, visitFunction);
      visitFunction(node);
      BINARY_TREE_TRAVERSALS.IN_ORDER(node.rightChild, visitFunction);
    }
  },
  PRE_ORDER: (node, visitFunction) => {
    if (node !== null) {
      visitFunction(node);
      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSALS.PRE_ORDER(node.rightChild, visitFunction);
    }
  },
  POST_ORDER: (node, visitFunction) => {
    if (node !== null) {
      BINARY_TREE_TRAVERSALS.POST_ORDER(node.leftChild, visitFunction);
      BINARY_TREE_TRAVERSALS.POST_ORDER(node.rightChild, visitFunction);
      visitFunction(node);
    }
  },
};

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;

      while (!added && currentNode) {
        // Don't add duplicates
        if (value === currentNode.value) {
          return "Duplicates cannot be added";
        }

        if (value < currentNode.value) {
          // If the spot is free, add it
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            // Otherwise find the next free spot
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  removeChild(value) {
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parentNode = null;

    // Find the node we want to remove
    while (!found) {
      if (currentNode === null || currentNode.value === null) {
        return "The node was not found";
      }
      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      }
    }

    console.log("We found the node");

    const nodeToRemoveIsParentsLeftChild =
      parentNode.leftChild === nodeToRemove;

    // If nodeToRemove is a leaf node, remove it
    if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = null;
      } else {
        parentNode.rightChild = null;
      }
    } else if (
      nodeToRemove.leftChild !== null &&
      nodeToRemove.rightChild === null
    ) {
      // Only has a left child
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = nodeToRemove.leftChild;
      } else {
        parentNode.rightChild = nodeToRemove.leftChild;
      }
    } else if (
      nodeToRemove.rightChild !== null &&
      nodeToRemove.leftChild === null
    ) {
      // Only has a right child
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = nodeToRemove.rightChild;
      } else {
        parentNode.rightChild = nodeToRemove.rightChild;
      }
    } else {
      // Has two children
      const rightSubTree = nodeToRemove.rightChild;
      const leftSubTree = nodeToRemove.leftChild;
      // Set parent node's respective child to the right sub tree
      if (nodeToRemoveIsParentsLeftChild) {
        parentNode.leftChild = rightSubTree;
      } else {
        parentNode.rightChild = rightSubTree;
      }

      // Find the lowest free space on the left side of the right
      // sub tree and add the leftSubTree
      let currLeftNode = rightSubTree;
      let currLeftParent;
      let foundSpace = false;
      while (!foundSpace) {
        if (currLeftNode === null) {
          foundSpace = true;
        } else {
          currLeftParent = currLeftNode;
          currLeftNode = currLeftNode.leftChild;
        }
      }
      currLeftParent.leftChild = leftSubTree;
      return "The node was successfully deleted";
    }
  }

  print(traversalType = "IN_ORDER") {
    let result = "";

    const visitFunction = (node) => {
      result += result.length === 0 ? node.value : ` => ${node.value}`;
    };

    BINARY_TREE_TRAVERSALS[traversalType](this.root, visitFunction);

    return result;
  }
}
