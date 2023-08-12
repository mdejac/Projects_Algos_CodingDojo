class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        //Check to see if this is empty
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this;
    }

    front() {
        if (!this.head) {
            return null
        }
        return this.head.data;
    }
}

let SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1);
SLL1.addFront(5);
console.log(SLL1);
SLL1.addFront(73);
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1);
console.log(SLL1.front());