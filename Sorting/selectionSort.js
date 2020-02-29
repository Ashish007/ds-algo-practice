function selectionSort(arr){
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        let temp = arr[j];
        if(arr[j] > arr[j+1]){
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
return arr;
}

let sortedArray = selectionSort([5,4,1,2,6,7]);
console.log(sortedArray);