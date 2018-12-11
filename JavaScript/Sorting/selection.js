function swap(arr, idx1, idx2){
    temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return temp
}

function selectionSort(arr){

    let minVal;
    let noSwap
    for(let i = 0; i< arr.length; i++){
                    noSwap = true

        for(let j=(i + 1); j< arr.length; j++){
        minVal = arr[i]
        if(arr[j] < arr[i]){
            swap(arr, j, i)
            noSwap = false
        }
        }
        if(noSwap) break
    }
    return arr
}

selectionSort([1,22,1,4,5])
