// 2nd largest element of an unsorted array.
function secondLargestNumber(arr){
    let l1 = l2 = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > l1){
            l2 = l1;
            l1 = arr[i];
        }
    }
    return l2;
}

let secondLargest = secondLargestNumber([8])

console.log(secondLargest)