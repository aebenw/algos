function averagePair(array, num){
    let left = 0
    let right = array.length - 1
    if (!array[0]){
        return false
    }

    while(left < right){
    let average = (array[right] + array[left])/2
        console.log(average, num)
    if(average === num ){
        return true
    } else if(average > num){
        right--
    } else{
        left++
    }
  }
  return false
}
