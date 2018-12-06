function countUniqueValues(arr){
  if (!arr[0]){
      return 0
  }
  let i = 0
  let j = 1
  while(j < arr.length){
    if (arr[i] !== arr[j]){
        i++
        arr[i] = arr[j]
    }
      j++
  }
  return i + 1
}

countUniqueValues([1,2,3,3])
