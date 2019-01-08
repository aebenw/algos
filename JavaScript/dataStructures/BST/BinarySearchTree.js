class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export default class BST{
    constructor(){
        this.root = null;
    }

    insert(val) {
        let insertedNode = new Node(val);


        if(!this.root){
            this.root = insertedNode
            return this;
        }

        let currentNode = this.root
        let conditional = true;
        while(conditional){
            if(insertedNode.val === currentNode.val) return undefined;
            if (insertedNode.val > currentNode.val){
                if(!currentNode.right){
                    currentNode.right = insertedNode;
                    return this
                    conditional = false;
                }
                    currentNode = currentNode.right;
            } else {
                 if(!currentNode.left){
                    currentNode.left = insertedNode;
                    return this
                    conditional = false;
                }
                    currentNode = currentNode.left;
            }
        }
    }

    find(val){
        let currentNode = this.root;
        let found = false;
        while (currentNode && !found){
            if(val < currentNode.val){
                currentNode = currentNode.left
            } else if(val> currentNode.val){
                currentNode = currentNode.right
            } else {
                return true
            }
        }
        return false;
    }

   bredthFirstSearch(){
        let queue = [];
        let visited = [];
        let currentNode = this.root;
        queue.push(currentNode)

        while(queue.length){
            currentNode = queue.shift();
            visited.push(currentNode.val)
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right)
        }
        return visited
    }

    depthFirstSearchPreOrder(){
    //goes all the way down the left side of a node
    //then goes all the way down the right side of a node
        let visited = [];

        function traverse(node){
            visited.push(node.val)
            if (node.left)  traverse(node.left)
            if (node.right)  traverse(node.right)
        }
        traverse(this.root)
        return visited
    }

   //we don't "visit" a node when we first approach it
   //first we "visit its entire left side"
   //then its entire right side
   //we visit the bottom nodes of one side of a branch
   //we then go up then do the same with the other side
   depthFirstSearchPostOrder(){
      let visited = [];

      function traverse(node){
          if (node.left)  traverse(node.left)
          if (node.right)  traverse(node.right)
          visited.push(node.val)

      }
        traverse(this.root)
        return visited

   }

   depthFirstSearchInOrder(){
      let visited = [];

      function traverse(node){
          if (node.left)  traverse(node.left)
              visited.push(node.val)
          if (node.right)  traverse(node.right)

      }
        traverse(this.root)
        return visited

   }


}

const makeBST = () => new BST();


let tree = new BST();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);


tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
