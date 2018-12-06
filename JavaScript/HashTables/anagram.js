function ana(str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
    for (let i=0; i < str1.length; i++){
        let letter1 = str1[i]
        let letter2 = str2[i]
        obj1[letter1] = ++obj1[letter1] || 1
        obj2[letter2] = ++obj2[letter2] || 1
    }
    for(key in obj1){
        if(!(key in obj2)){
            return false
        } else if (obj1[key] !== obj2[key]){
           return false
        }
    }
    return true
}

ana('asdkfjal', 'fjalasdk')
