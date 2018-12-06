

function isPalindrome(str){


    let first = str.slice(-1)
    let last = str.slice(0,1)
    if(first === last && str.length <= 2){
        return true
    } else if(first === last){
        return isPalindrome(str.slice(1,-1))
    } else {
        return false
    }

//     console.log(first, last, arr)
}


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
