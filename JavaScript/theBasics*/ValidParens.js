var isValid = function(s) {
    let brackets = {"}":"{", "]": "[", ")": "("}
    let stack = []

    for(let char of s){
        if(brackets[char]){
             let peek = stack.length ? stack.pop() : "a";
             if(brackets[char] !== peek){
                return false
             }
        } else stack.push(char)
    }
    return stack.length ? false : true

};
