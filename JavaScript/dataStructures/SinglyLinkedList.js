class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

//primitive way of creating a link list


class SinlyLinkedList{
    //pointer to head and tail
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        let info = new Node(val)
        if (!this.head){
            this.head = info;
            this.tail = info;
        } else {
            this.tail.next = info;
            this.tail = info
        }
          this.length++;
          return this
    }

    pop(){
        if (this.head === null)return undefined

        let current = this.head
        while(current){
            if (this.head === this.tail){
                this.head = null;
                this.tail = null;
                this.length = 0;
                return this
            } else if (current.next === this.tail){
                current.next = null;
                this.tail = current;
                this.length -=1;
                return this
            }

            current = current.next;
        }
    }

    shift(){
        if (this.head === null)return undefined

        if (this.head === this.tail){
                this.head = null;
                this.tail = null;
                this.length = 0;
                return this
            } else {
                let oldHead = this.head
                this.head = oldHead.next
                this.length -=1
                return oldHead.val
            }

    }
    unshift(val){
       let info = new Node(val)
        if (!this.head){
            this.head = info;
            this.tail = info;
        } else {
            info.next = this.head
            this.head = info
        }

        this.length++;
        return this
    }

    get(index){
        if(index > this.length || index < 0) return null
        let current = this.head
        for(let i = 0; i < index + 1; i ++){
            if(i === index) return current
            current = current.next
        }
    }

    set(val, index){
        let oldVal = this.get(index)
        if(oldVal){
            oldVal.val = val
            return true
        }
        return false
    }

    insert(val, index){
        if(index < 0){
            return false;
        } else if(index === 0){
             this.unshift(val)

        } else if (index === this.length){
            this.push(val)
            return true
        } else {
            let newNode = new Node(val);
            let preNode = this.get(index - 1);
            let nextNode = preNode.next;
            newNode.next = nextNode
            preNode.next = newNode;
            this.length++
            return true
        }
    }

    remove(index){
        if(index < 0){
            return false;
        } else if(index === 0){
             this.shift(val)
        } else if (index === this.length - 1){
            this.pop()
            return true
        }
        let preNode = this.get(index - 1);
        let removeNode = preNode.next;
        let newNext = removeNode.next;

        preNode.next = newNext;
        this.length--;
        return removeNode;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
        let next;


        for(let i=0; i < this.length; i++){
            next = node.next;
            node.next = previous
            previous = node;
            node = next;

        }
    }
}

var list = new SinlyLinkedList()

list.push("Hello")
list.push("Goodbye")
list.push("ehem")
list.push("goodday")

//This pushing pushes something at the end of the list
