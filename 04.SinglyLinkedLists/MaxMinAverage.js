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

    max() {
        if (this.head) {
            let runner = this.head.next;
            let maxVal = this.head.data;
            while (runner != null) {
                if (runner.data > maxVal) {
                    maxVal = runner.data;
                }
                runner = runner.next;
            }
            return maxVal;
        }
    }

    min() {
        if (this.head) {
            let runner = this.head.next;
            let minVal =this.head.data;
            while (runner != null) {
                if (runner.data < minVal) {
                    minVal = runner.data;
                }
                runner = runner.next;
            }
            return minVal;
        }
    }

    average() {
        if (this.head) {
            return this.findSum()/this.length();
        }
    }
}

let SLL1 = new SLL();
SLL1.addFront(76).addFront(2).addFront(11).addFront(110).addFront(-11);
console.log(SLL1.max());
console.log(SLL1.min());
console.log(SLL1.average());
