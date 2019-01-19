// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?


var isPalindrome = function(head) {
    if(!head || !head.next)return true
    let secondHalf = getSecondHalf(head)

    let current1 = head;
    let current2 = secondHalf

    while(current1 && current2){
        if(current1.val !== current2.val) return false
        current1 = current1.next
        current2 = current2.next
    }
    return true
};

function getSecondHalf(node){
    let p = node;
    let q = node;
    let secondHalf
    while(p){
        q = q.next.next
        if(q === null){
            secondHalf = p.next
            break
        }
        if(q.next === null){
            secondHalf = p.next.next
            break
        }
        p = p.next
    }
    p.next = null
    return reverse(secondHalf)
}


function reverse(node){
    function helper(nnode, previous){
        let temp = nnode.next
        nnode.next = previous
        return temp !== null ? helper(temp, nnode) : nnode
    }

    return helper(node, null)
}
