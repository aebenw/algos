var connect = function(root) {
//     let q = []
//     if(root === null){
//         q = [root]
//     } else q = [null, root]

//     // [null, 7, 6, 5, 4,null, 3, 2, null]  c = 0

//     while(q.length){
//         let current = q.pop()
//         if(current === null){
//             if(q.length){
//                 q.unshift(null)
//                 current = q.pop()
//             } else break
//         }
//         current.next = q[q.length -1]

//         if(current.left) q.unshift(current.left)
//         if(current.right) q.unshift(current.right)
//     }

    function helper(node){
        if(node.left){
            node.left.next = node.right
        }

        if(node.next !== null) {
            if(node.right)node.right.next = node.next.left
        }

        if(node.left) helper(node.left)
        if(node.right) helper(node.right)
    }

    if(root) helper(root)
};
