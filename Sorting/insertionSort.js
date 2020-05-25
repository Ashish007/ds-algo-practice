function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<i+1; j++){
            if(arr[i+1] < arr[j]){
                let tmp = arr[i+1];
                arr[i+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
// let sortedArray = insertionSort([7, 6, 5, 4, 3, 2, 1]);
// console.log('sortedArray::',sortedArray);
