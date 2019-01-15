class Node {
    constructor(val){
    this.val = val;
    this.next = null;
    }
}



class PriorityQ {
    constructor(){
        this.values = [];
    }

    //My insert Method
    insert(val, priority){
        this.values.push({val, priority});
        if(this.values.length === 1) return this.values;

        let insertedIdx = this.values.length - 1;
        let parentIdx = Math.floor((insertedIdx - 1)/2)

        this.bubbleUp(parentIdx, insertedIdx);
    }

    bubbleUp(parentIdx, insertedIdx){
        if(this.values[parentIdx].priority <= this.values[insertedIdx].priority) {
            return this.values;
        } else {

            this.swap(parentIdx, insertedIdx)
            if(parentIdx === 0) return this.values

            let tempParentIdx = parentIdx;
            parentIdx = Math.floor((parentIdx - 1)/2);
            insertedIdx = tempParentIdx;

            return this.bubbleUp(parentIdx, insertedIdx)
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

    extractMin(){
        let last = this.values.length -1
        this.swap(0, last)
        let node = this.values.pop()

        if (this.values.length > 0){
            this.sinkDown();
//             return this.values
        }

        return node

    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let sinkElement = this.values[idx].priority;

        while(true){
            let base = 2 * idx;

            //need to make sure that both children are there
            //could be one child, could be no children

            let leftIdx = base + 1;
            let rightIdx = base + 2;

            let leftChild;
            let rightChild;

            let lesserIdx;
            let lesserChild;
            
            if(leftIdx < length) {
                leftChild = this.values[leftIdx].priority;
                    if (rightIdx < length){
                        rightChild = this.values[rightIdx].priority;
                    } else {
                        lesserChild = leftChild;
                        lesserIdx = leftIdx
                    }

            } else break;

            if(!lesserChild){
                if(leftChild <= rightChild){
                    lesserChild = leftChild;
                    lesserIdx = leftIdx;
                } else {
                    lesserChild = rightChild;
                    lesserIdx = rightIdx;
                }
            }

            if(sinkElement >= lesserChild){
                this.swap(idx, lesserIdx)
                idx = lesserIdx;
            } else break;
        }

    }

    swap(idx1, idx2){
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }



}

//main difference between this and a graph is that edges are added with a weight
// "A" : [{node: "B", weight: 10}]

class WeightedGraph {
    constructor(){
        //adgecency list
        this.aList = {}
    }

    addVertex(ver){
        if(this.aList[ver]) return;
        this.aList[ver] = []
    }

    addEdge(v1, v2, weight){
        if(this.aList[v1]) this.aList[v1].push({node: v2, weight})
        if(this.aList[v2]) this.aList[v2].push({node: v1, weight})
    }

    removeEdge(v1, v2){
        if(this.aList[v1]) {
            this.aList[v1] = this.aList[v1].filter(e => e !== v2)
        }
        if(this.aList[v2]) {
            this.aList[v2] = this.aList[v2].filter(e => e !== v1)
        }

    }

    removeVertex(v){
        while(this.aList[v].length){
            let removal = this.aList[v].pop()
            this.removeEdge(v, removal)
        }
//         this.aList[v].forEach(n => {
//           this.removeEdge(v, n)
//         })
        delete this.aList[v]
    }

    //Recursive
    DFSR(ver){
        let res = [], visited = {}, aList = this.aList;


        (function helper(node){
            if(!node) return null;

            res.push(node)
            visited[node] = true
            let list = aList[node]

            for(let i = 0; i< list.length; i++){
                let x = list[i]
                if(!visited[x]) helper(x)
            }
        })(ver)
        return res
    }
    //Iterative
    DFSI(ver){
        let stack = [ver], aList = this.aList, res = [], visited = {};

        visited[ver] = true
        while(stack.length){
            let current = stack.pop()
            res.push(current)
            let list = aList[current]

            for(let i = 0; i< list.length; i++){
                let x = list[i]
                if(!visited[x]) {
                    visited[x] = true
                    stack.push(x)
                }
            }

        }
        return res
    }

    bredthFirst(ver){
        let q = [ver], visited = {}, res = [], depth = 0
        visited[ver] = true
        while(q.length){
            let current = q.pop()
            res.push(current)
            let list = this.aList[current]
            list.forEach(n =>{
                if(!visited[n]){
                    visited[n] = true
                    q.unshift(n)
                }
            })
            depth++
            console.log(depth)

        }
        return res
    }

    dijkstra(start, end){
        //need to get all vertexes between start and end from our AList obj
        let distances = {}
        let priority = new PriorityQ()
        let previous = {}
        let path = []

        for(let key in this.aList){
            if(key === start){
                distances[key] = 0
                priority.insert(key, 0)
            } else {
                distances[key] = Infinity
                priority.insert(key, Infinity)
            }
            previous[key] = null;
        }

        while(priority.values.length){
            let current = priority.extractMin().val;
//             console.log(current)
            if(current === end && distances[current] !== Infinity){
                while(previous[current]){
                    path.push(current)
                    current = previous[current]
                }
                break
            }

            let list = this.aList[current]
//             console.log(current.val, list)
            if(current || distances[current] !== Infinity){
            for(let i = 0; i< list.length; i++){
                let x = list[i]
//                 console.log(current, x, list, distances, priority)
                if(x.weight + distances[current] < distances[x.node]){
                    distances[x.node] = x.weight + distances[current]
                    priority.insert(x.node, distances[x.node])
                    previous[x.node] = current

                    }
                }
            }
        }
//         console.log(priority, distances, previous)
        return [...path, start]
    }
}

let g = new WeightedGraph()
g.addVertex("a")
g.addVertex("b")
g.addVertex("d")
g.addVertex("c")
g.addVertex("e")
g.addVertex("f")




g.addEdge("a", "b", 4)
g.addEdge("e", "b", 3)
g.addEdge("e", "d", 3)
g.addEdge("a", "c", 2)
g.addEdge("c", "d", 2)
g.addEdge("f", "c", 4)
g.addEdge("d", "f", 1)
g.addEdge("e", "f", 1)




let q = new PriorityQ()
q.insert("b", 3)
q.insert("a", 2)
q.insert("c", 0)
q.insert("d", 1)
