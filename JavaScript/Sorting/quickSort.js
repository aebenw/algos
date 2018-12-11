function swap(arr, idx1, idx2){
    temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return temp
}

function pivot(arr, start = 0, end = arr.length + 1){
    let pivot = arr[start]
    let index = start;
    for(let i = start+1; i< arr.length; i++){
        if (arr[i] < pivot){
           index++
           swap(arr, index, i)
           console.log(arr)
        }
    }
    swap(arr, start, index)
    return index

}


function quickSort(arr, left=0, right= arr.length -1){
    if(left < right){
    let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr, left, pivotIndex-1)
    quickSort(arr, pivotIndex + 1, left)
    }
    return arr
}

quickSort([8,6,5,3,9,10])
