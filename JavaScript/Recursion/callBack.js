function someRecursive(arr, cb){
    if(!(cb(arr[0]))){
        if(arr.length === 1){
            return false
        } else{
        arr.splice(-1, 1)
        return someRecursive(arr)
        }
    } else{
        return true
    }
}

// SAMPLE INPUT / OUTPUT
let isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], idOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
