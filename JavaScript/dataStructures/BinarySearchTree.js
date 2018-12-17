class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
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
        //Mine
//         while(true){
//             if(val === currentNode.val){
//                 return true;
//             }
//             if(val > currentNode.val){
//                 if(currentNode.right){
//                 currentNode = currentNode.right;
//                 } else {
//                     return false;
//                 }

//             } else if(val < currentNode.val){
//                 if(currentNode.left){
//                     currentNode = currentNode.left;
//                 } else {
//                     return false;
//                 }

//             }
//         }

        //Colt's
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





}
