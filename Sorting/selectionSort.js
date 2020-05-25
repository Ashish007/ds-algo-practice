function selectionSort(arr){
    let size = arr.length;
    for(let i=0; i<size; i++){
        let min = arr[i]
        for(let j=i; j<size;j++ ){
            if(min > arr[j+1]){
                min = arr[j+1];
                arr[j+1] = arr[i];
                arr[i]=min
            }
        }
        console.log('j::',i, 'arr::,',arr)
    }
    return arr;    
}
let sortedArray = selectionSort([5,4,1,2,6,7]);
console.log(sortedArray);
