function bubbleSort(arr){
    let size = arr.length;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<size; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
        size--
    }
    console.log(arr)
}

let arr = [6,5,4,3,2,1];
bubbleSort(arr)