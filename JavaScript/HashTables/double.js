function areThereDuplicates(arr) {
    let obj = {}

    for(let i in arr){
    console.log(i)
        if(obj[i] === 1){
            return true
        } else {
            obj[i] = 1
        }
    }
    return false 
}

areThereDuplicates([1,2,2,3])

//[1,2,2,3] = true
//[1,2,3] = false
//[1,2,2,3] = true
