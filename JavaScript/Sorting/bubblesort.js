function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    console.log(temp)
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    console.log(arr)

    return temp
}


function bubbleSort(arr){
    let noSwap;
    for (let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            noSwap = false
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
            } else {
                noSwap = true
            }
        } if(noSwap=== true){
            return arr
        }
        console.log(i)
    }
    return arr
}

bubbleSort([18, 12,13,3,4,6, 7, 8 , 9])
