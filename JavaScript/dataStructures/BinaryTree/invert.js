// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:
//
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

var invertTree = function(root) {
    function helper(node){
        if(!node)return null;
        let tempRight = node.right;
        node.right = helper(node.left);
        node.left = helper(tempRight)
        return node
    }
    return helper(root)
};
