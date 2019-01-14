var isValidBST = function(root) {
    if(!root)return true
    let left;
    let right

    function helper(node, max, min){

        if(node.val >= max)return false;
        if(node.val <= min) return false;


        right = node.right !==null ? helper(node.right, max, node.val) : true
        if(right){
            left = node.left !== null ? helper(node.left, node.val, min) : true
        } else return right
       return left

    }


    return helper(root, Infinity, -Infinity)

};
