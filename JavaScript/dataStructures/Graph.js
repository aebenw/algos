class Graph {
    constructor(){
        //ajacencyList shortened
        this.aList = {}

    }

    addVertex(ver){
        if(this.aList[ver]) return;
        this.aList[ver] = []
    }

    addEdge(v1, v2){
        if(this.aList[v1]) this.aList[v1].push(v2)
        if(this.aList[v2]) this.aList[v2].push(v1)
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

}

let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addVertex("LA")
g.addVertex("SF")


g.addEdge("Tokyo", "Dallas")
g.addEdge("Tokyo", "Aspen")
g.addEdge("Tokyo", "LA")
g.addEdge("Aspen", "Dallas")
g.addEdge("LA", "Dallas")
g.addEdge("LA", "SF")
