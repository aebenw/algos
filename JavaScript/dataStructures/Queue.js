//Similar to a stack
//add data in and remove data out
//instead of LIFO its a FIFO
    //**First In First Out**
    //Really the only main rule
//commonly used
//Uploading or downloading, first file downloading will be the first downloaded

//Arrays can be used for this, but Queue class can be faster
    //If we used a SLL then we don't have to reindex from the first position
    //We add to the tail, we remove from the head

//.shift combined with .push



class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
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

    dequeue(){

        if (this.first === null)return undefined

        if (this.first === this.last){
                this.first = null;
                this.last = null;
                this.size = 0;
                return this
            } else {
                let oldHead = this.first
                this.first = oldHead.next
                this.size -=1
                return oldHead.val
            }
    }
}



let q = new Queue()

q.enqueue("hey");
q.enqueue("hello");
q.enqueue("ok");
q.enqueue("test");
