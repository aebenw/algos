import BST from './BinarySearchTree.js';

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


var isSymmetric = function(root) {
  function check(root1, root2){
        if(root1 && root2){
            return (root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left))
        }
          return !(root1 || root2)
    }
    return root ? check(root.right, root.left) : true

};

isSymmetric(tree.root);
