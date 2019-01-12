var reverseList = function(head) {
    if(head === null)return head
    function helper(node, previous){
        let temp = node.next
        node.next = previous
        return temp === null ? node : helper(temp, node)
    }

    return helper(head, null)
};
