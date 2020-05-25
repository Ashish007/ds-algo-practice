function bucketSort(arr){
    let buckets = Math.ceil(Math.sqrt(arr.length))
    let max = -1;
    
    for(let i=1; i<=buckets; i++){
        this["arr"+i]=[]
    }
    for(let i=0; i<arr.length; i++){
        if(max<arr[i])
            max = arr[i]
    }
    for(let i=0; i<arr.length; i++){
        let val = Math.ceil((arr[i]*buckets)/max)
        this["arr"+val].push(arr[i])
    }
    // for(let i=1; i<=buckets; i++){
    //    this["arr"+i] = insertionSort("arr"+i)
    // }
    console.log('arr1::',arr1)
    console.log('arr2::',arr2)
    console.log('arr3::',arr3)
}
let sortedArray = bucketSort([7, 6, 55, 44, 33, 2, 1]);