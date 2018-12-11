function merge(arr1, arr2){
    let newArr = [];
    let i = 0
    let j = 0
    let end;
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }else{
           newArr.push(arr2[j])
            j++
        }
    }
    if(i === arr1.length){
        end = arr2.slice(j, arr2.length)
        newArr = [...newArr, ...end]
    } else {
       end = arr1.slice(i, arr1.length)
       newArr = [...newArr, ...end]
    }
    return newArr
}


function mergeSort(arr){
    if (arr.length <= 1) return arr
    let half = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, half))
    let right = mergeSort(arr.slice(half, arr.length))
    return merge(left, right)
}

mergeSort([9,3,5,2,1,10])
