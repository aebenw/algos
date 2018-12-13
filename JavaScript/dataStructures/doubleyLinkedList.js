class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//takes up more memory since now it has a previous and a next
//much more efficient than a SLL
    //for example, pop becomes much more efficient
    //don't have to go through the entiriety of the list, we can access from the end

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head === null && this.tail === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop(){
        if(this.length === 0)return undefined


        let oldTail = this.tail
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            oldTail.prev = null;
            this.tail.next = null;
        }

        this.length--;
        return oldTail;
    }

    shift(){
       if(this.length === 0)return undefined

       let oldHead = this.head
       if (this.length === 1){
            this.head = null;
            this.tail = null;
       } else {
           this.head = oldHead.next;
           this.head.prev = null;
           oldHead.next = null;
       }
       this.length--;
       return oldHead;
    }

    unshift(val){
        if(this.length === 0)return this.push(val);

        let newNode = new Node(val);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode

        this.length++;
        return this;
    }

    get(idx){
        if(idx > this.length - 1 || idx < 0)return undefined;
        let mid = Math.floor(this.length/2);
        if(idx <= mid){
           let current = this.head;
           for(let i=0; i< mid+1; i++){
                if(idx === i)return current;
                current = current.next;
           }
         } else {
            let current = this.tail;
            for(let i=this.length -1; i > mid; i--){
                if(idx === i)return current;
                current = current.prev;
           }
        }
    }

    set(val, idx){
        if (idx > this.length -1 || idx < 0)return undefined;
        let node = this.get(idx);
        node.val = val;
        return node;
    }

    insert(val, idx){

        if (idx < 0 || idx >=this.length){
            return undefined;
        }else if(idx === this.length - 1){
            return this.push(val)
        } else if(idx === 0){
            return this.unshift(val);
        }

        let newNode = new Node(val);
        let previousNode = this.get(idx - 1);
        let nextNode = previousNode.next

        newNode.prev = previousNode;
        newNode.next = nextNode;
        previousNode.next = newNode
        nextNode.prev = newNode

        this.length++;
        return newNode;
    }

    remove(idx){
        if (idx < 0 || idx >=this.length){
            return undefined;
        } else if(idx === this.length - 1){
            return this.pop()
        } else if(idx === 0){
            return this.shift();
        }

        let removedNode = get(idx);
        let nextNode = removedNode.next;
        let previousNode = removedNode.previousNode;

        removedNode.next = null;
        removedNode.prev = null;

        previousNode.next = nextNode;
        nextNode.prev = previousNode;

        this.length--;
        return removedNode;

    }
}

let list = new DoublyLinkedList();

list.push("first");
list.push("second");
list.push("third");
