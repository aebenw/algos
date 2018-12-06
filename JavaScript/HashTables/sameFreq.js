function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.

  str1 = num1.toString()
  str2 = num2.toString()
  obj1 = {}
  obj2 = {}
  if (str1.length !== str2.length) return false
    for(let i=0; i < str1.length; i++){
        let char1 = str1[i]
        let char2 = str2[i]

        obj1[char1] = ++obj1[char1] || 1
        obj2[char2] = ++obj2[char2] || 1
    }

    for(let key in obj1){
        if(!(key in obj2)){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
   return true

}


sameFrequency(8992, 8299)
