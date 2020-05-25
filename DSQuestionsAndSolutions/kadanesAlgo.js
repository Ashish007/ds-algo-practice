function maxSumInSubarray(arr){
    let maxCurrent = maxGlobal = arr[0];
    for(let i=1; i<arr.length-1; i++){
        maxCurrent = Math.max(arr[i], maxCurrent+arr[i])
        if(maxCurrent > maxGlobal)
            maxGlobal = maxCurrent
    }
    return maxGlobal;
}
let maxSum = maxSumInSubarray([-2,3,-3,1,2])
console.log(maxSum)