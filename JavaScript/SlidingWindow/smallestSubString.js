//Find the smallest set of numbers in an array that equal a given number
//if no numbers equal the given number, return 0
//if the sum becomes larger than the number, the window moves one place in the array
//want to keep adding until we either equal the number or go above it
//if it equals the number, then we move the window over

function minSubArrayLen(arr, num){
    let sum = 0;
    let tempNum = 0
    let minNum = 0
    for (let i=0; sum < num; i++){
        sum += arr[i]
        minNum += 1
        if (minNum === arr.length) return 0
    }
    tempNum = minNum
    for (let i = 0; i < arr.length; i++){
        if (minNum === 1) return minNum
        sum = sum - arr[i]
        if (sum >= num){
            tempNum--
            minNum = tempNum

        } else {
            if (i +tempNum >= arr.length){
                minNum = tempNum
                return minNum
                } else {
                  sum = sum + arr[i + tempNum]
                }
        }
    }
    return minNum

}

console.log(minSubArrayLen([2,3,1,2,3,4], 7), "should be 2") //2
console.log(minSubArrayLen([2,1,6,5,4], 9), ("should be 2")) //2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), ("should be 1")) //1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55), ("should be 5")) //5
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39), ("should be 3")) //3
