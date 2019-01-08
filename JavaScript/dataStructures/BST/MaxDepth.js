var maxDepth = function(root) {
        if(!root) return 0;

        let nums = [];
        function helper(node, num){
            num += 1;
            if(node.left)helper(node.left, num);
            if(node.right)helper(node.right, num);
            if(!node.left && !node.right) nums.push(num)
        }
        helper(root, 0)
        return Math.max(...nums)
};
