class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        let newNode = new BTNode(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } 

        let runner = this.root;
        while (runner !== null) {
            if (val < runner.val) {
                if (runner.left === null) {
                    runner.left = newNode;
                    break;
                }
                runner = runner.left;
            } else {
                if (runner.right === null) {
                    runner.right = newNode;
                    break;
                }
                runner = runner.right;
            }
        }
        return this;
    }

    contains(val) {
        if (this.root) {
            let runner = this.root;
            while (runner !== null) {
                if (runner.val === val) {
                    return true;
                }
                if (val < runner.val) {
                    runner = runner.left;
                } else {
                    runner = runner.right;
                }
            }
        }
        return false;
    }

    min() {
        if (this.root) {
            let runner = this.root;
            while (runner.left != null) {
                runner = runner.left;
            }
            return runner.val;
        }
    }

    max() {
        if (this.root) {
            let runner = this.root;
            while (runner.right != null) {
                runner = runner.right;
            }
            return runner.val;
        }
    }

    size() {
        if (this.root === null) {
            return 0;
        }
        let runner = this.root;
        const nodeCounter = node => {
            if (node == null) {
                return 0;
            }
            return 1 + nodeCounter(node.left) + nodeCounter(node.right);
        }
        return nodeCounter(runner);
    }
    
    isEmpty() {
        return this.root === null;
    }
}

let bst = new BST();

// console.log(bst.isEmpty());
bst.add(44).add(22).add(33).add(55).add(-1).add(15).add(-10);
// console.log(bst.isEmpty());


// console.log(bst);
// console.log(bst.contains(44));

// console.log(bst.min());
// console.log(bst.max());

console.log(bst.size());