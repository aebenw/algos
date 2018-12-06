function maxSubarraySum(arr, num){
    if (arr.length < num){
        return null
    }
    let maxSum = 0
    for (let i=0; i < num; i++){
        maxSum += arr[i]
    }
    let tempSum = maxSum
    for (let i=num; i <arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

maxSubarraySum([100,200,300,400], 2)
