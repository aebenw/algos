function isSubsequence(sub, long) {
  let subNum = 0;
  let longNum = 0;
  while (longNum < long.length){
      if(subNum === sub.length -1){
          return true
      }
      if(long[longNum] === sub[subNum]){
          subNum++
          longNum++
      }
       if(long[longNum] !== sub[subNum]){
          longNum++
      }
  }
  return false
}
