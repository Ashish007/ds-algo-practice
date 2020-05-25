function quickSort(arr, low, high){
    if(low < high){
        let newPivot = partition(arr, low, high);
        console.log(newPivot)
        quickSort(arr, low, newPivot-1)
        quickSort(arr, newPivot+1, high)
    }
    console.log(arr)
}
function partition(arr, low, high){
    let i=low-1;
    let pivotIndex = high;
    for(let j=low; j<=pivotIndex; j++){
        console.log('Pivot value:::', arr[pivotIndex])
        if(arr[j] <= arr[pivotIndex]){
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    // console.log(arr)    
    }
    return i;
}

// let putInPosition = partition([9,8,1,2,3,6])
let sortedArray = quickSort([9,8,7,-6,5,4,3,2,1], 0, 8);
