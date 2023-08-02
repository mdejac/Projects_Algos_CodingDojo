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
        //Check to see if list is empty
        if(!this.head) {
            this.head = new_node;
            return this;
        }
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

    findSum() {
        if (this.head === null) {
            return 0;
        }
        let runner = this.head;
        let sum = 0;
        while (runner !== null) {
            sum+=runner.data;
            runner = runner.next
        }
        return sum;
    }

    contains(value) {
        if (this.head) {
            let runner = this.head;
            while (runner !== null) {
                if (runner.data === value) {
                    return true;
                }
                runner = runner.next;
            }
        }
        return false;
    }

    length() {
        let count = 0;
        if (this.head) {
            let runner = this.head;
            while (runner !== null) {
                runner = runner.next;
                count++;
            }
        }
        return count;
    }

    display() {
        if (this.head === null) {
            return "";
        }
        let runner = this.head;
        let stringList = "";
        while (runner !== null) {
            stringList += runner.data;
            if (runner.next !== null) {
                stringList += ", ";
            }
            runner = runner.next;
        }
        return stringList;
    }
}

let SLL1 = new SLL();
SLL1.addFront(76);
console.log(SLL1);
SLL1.addFront(2);
console.log(SLL1);
console.log(SLL1.display());
SLL1.addFront(11.41);
console.log(SLL1.display());