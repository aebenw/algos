//LIFO - "LAST IN FIRST OUT"
//A collection of data where the last thing added is the first thing out
//think of browser history or something like control-z
//Linked list are the way to go, arrays are too expensive for these purposes


//Only 2 methods we care about, stack.push/stack.pop
//These are shift and unshift since we want to add and remove to the beginning of an SSL
    //which is much faster than push and pop, and less memory than a DLL

class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }

    //shift
    push(val){
       let node = new Node(val)
        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first
            this.first = node
        }

        this.size++;
        return this.size;
    }

    //unshift
    pop(){
        if (this.first === null)return undefined

        if (this.first === this.last){
                this.first = null;
                this.last = null;
                this.size = 0;
                return this.size
            } else {
                let oldFirst = this.first;
                this.first = oldFirst.next;
                this.size--;
                return oldFirst.val;
            }

    }
}


let stack = new Stack();

stack.push("one");
stack.push("two");
stack.push("three");
stack.push("four");
