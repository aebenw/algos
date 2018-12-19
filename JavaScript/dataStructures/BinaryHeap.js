class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}



class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    //My insert Method
    insert(val){
        this.values.push(val);
        if(this.values.length === 1) return this.values;

        let insertedIdx = this.values.length - 1;
        let parentIdx = Math.floor((insertedIdx - 1)/2)

        this.bubbleUp(this.values, parentIdx, insertedIdx);
    }

    bubbleUp(arr, parentIdx, insertedIdx){
        if(arr[parentIdx] >= arr[insertedIdx]) {
            return arr;
        } else {
            let temp = arr[parentIdx];
            arr[parentIdx] = arr[insertedIdx];
            arr[insertedIdx] = temp;

            if(parentIdx === 0) return arr

            let tempParentIdx = parentIdx;
            parentIdx = Math.floor((parentIdx - 1)/2);
            insertedIdx = tempParentIdx;

            return this.bubbleUp(this.values, parentIdx, insertedIdx)
        }

    }

    //Colt's Insert Method

//     insert(val){
//         this.values.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp(){
//         let idx = this.values.length -1;
//         const element = this.values[idx];

//         while(idx > 0){
//             let parentIdx = Math.floor((idx -1)/2);
//             let parent = this.values[parentIdx];
//             if(element <= parent)break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent
//             idx = parentIdx;
//         }
//     }

    extractMax(){
        let last = this.values.length -1
        this.swap(0, last)
        this.values.pop()
        if (this.values.length > 0){
            this.sinkDown();
            return this.values
        }
    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let sinkElement = this.values[idx];

        while(true){
            let base = 2 * idx;

            //need to make sure that both children are there
            //could be one child, could be no children

            let leftIdx = base + 1;
            let rightIdx = base + 2;

            let leftChild;
            let rightChild;

            let greaterIdx;
            let greaterChild;

            if(leftIdx < length) {
                leftChild = this.values[leftIdx];
                    if (rightIdx < length){
                        rightChild = this.values[rightIdx];
                    } else {
                        greaterChild = leftChild;
                        greaterIdx = leftIdx
                    }

            } else break;

            if(!greaterChild){
                if(leftChild >= rightChild){
                    greaterChild = leftChild;
                    greaterIdx = leftIdx;
                } else {
                    greaterChild = rightChild;
                    greaterIdx = rightIdx;
                }
            }

            if(sinkElement <= greaterChild){
                this.swap(idx, greaterIdx)
                idx = greaterIdx;
            } else break;
        }

    }

    swap(idx1, idx2){
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }



}

let MBH = new MaxBinaryHeap();
MBH.insert(41);
MBH.insert(39);
MBH.insert(33);
MBH.insert(18);
MBH.insert(27);
MBH.insert(12);
MBH.insert(55);

console.log(MBH.values);
