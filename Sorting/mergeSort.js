function mergeSort(arr, left, right){
        if(right > left){
            let middle = (left+right)/2;
            middle = Math.floor(middle);
            mergeSort(arr, left, middle);
            mergeSort(arr, middle+1, right);
            merge(arr, left, middle, right);
        }
}
function merge(arr, left, middle, right){
    console.log(left, middle, right)
    // let L = R = [];
    // for(let i = 0 ; i < middle-left+1 ;i++){
    //     L[i] = arr[left+i];
    // }
    // for(let j = 0 ; j < right-middle; j++){
    //     R[i] = arr[middle + 1 +j];
    // }

}
let arr = [6,1,2,3,4,7,8,5,101,99];
let left = 0;
let right = arr.length-1;
let sortedArray = mergeSort(arr, left, right);