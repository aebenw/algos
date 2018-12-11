// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

function longest(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let i = 0;
  let j = 0

  let finish = []
  while (i < s1.length){
     let iVal = s1[i].charCodeAt(0) - 97
      if(!finish[iVal]){
        finish[iVal] = s1[i];
      }
        i++
  }
    while (j < s2.length){
     let jVal = s2[j].charCodeAt(0) - 97
      if (!finish[jVal]){
        finish[jVal] = s2[j];
      }
        j++
  }
  return finish.join("")
}

//was trying not to use sort()
//as of now its O(2n)
