// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

 // create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

function sortByOrder (arr, number){
  for(let i =0; i< arr.length; i++){
    if(arr[i] > number){
      let temp = arr.splice(i, 1)
      arr.unshift(temp)
      break;
    }
  }
}

function nextBiggest(n){
  let numArr = n.toString().split("");
  if (numArr.length === 1) return -1;

  let i = numArr.length - 1;
  while (i > 0){
    let num1 = parseInt(numArr[i]);
    let num2 = parseInt(numArr[i-1]);
    if(num1 > num2){
      break
    }
    i--;
  }
  if(i === 0) return -1;

  swapped = numArr.splice(i-1)
  let number = swapped[0];
  swapped.sort((a,b) => a - b)

  sortByOrder(swapped, number)
  numArr = numArr.concat(swapped)
  return  parseInt(numArr.join(""))

}

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// 648415764267 ==> 648415764276
// 19533 ==> 31359
