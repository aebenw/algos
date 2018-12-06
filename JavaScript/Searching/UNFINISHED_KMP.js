function stringSearch(string, subString){
    count = 0
    j = 0
    for(let i=0; i < string.length; i++){

        if(string[i] === subString[j]){
            if (j === subString.length -1) {
                count += 1
                j = 0
             } else {
                j++
             }
        } else {
            j = 0
        }
    }
    return count
}


stringSearch("wowzoomgomg", "omg")
