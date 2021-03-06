// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 4``65 = 807.

var addTwoNumbers = function(l1, l2) {
    function helper(node1, node2, extra = 0){
        let newNode = new ListNode();
        if(!node1 && !node2) {
            if(extra === 1){
                newNode.val = extra;
                return newNode
            }  return null;
        }   
        let x;
        let y;
        if(node1){
            x = node1.val;
            node1 = node1.next
        } else x = 0
        if(node2){
            y = node2.val;
            node2 = node2.next
        } else y = 0
        let added = x + y + extra
        if(added >= 10){
            let leftOver = added % 10
            newNode.val = leftOver
            newNode.next = helper(node1, node2, 1)
            return newNode
        } else {
            newNode.val = added;
            newNode.next = helper(node1, node2)
            return newNode
        }
    }
    return helper(l1, l2)
};
