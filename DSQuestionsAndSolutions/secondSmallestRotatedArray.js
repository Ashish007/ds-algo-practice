function secondSmallestNumber(arr, left, right){
    let mid = Math.floor((left+right)/2);
    if(arr[left] > arr[left+1]){
        return arr[left+2] || arr[0]
    }
    if(arr[mid] > arr[mid+1]){
        return arr[mid+2] || arr[0]
    }
    if(arr[right] > arr[mid])
       return secondSmallestNumber(arr,left, mid)    
    return secondSmallestNumber(arr,mid+1, right)    
}

let secondSmallestNum = secondSmallestNumber([5,6,7,1,2,3,4], 0, 6);
console.log(secondSmallestNum)