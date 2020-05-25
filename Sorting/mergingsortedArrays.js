function mergeSortedArrays(arr1, arr2){
    let i = j = k = 0;
    let finalArray = [];
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            finalArray[k] = arr1[i];
            i++;
        }
        if(arr1[i] > arr2[j]){
            finalArray[k] = arr2[j];
            j++;
        }
        k++;
    }
    while(k < (arr1.length+arr2.length)){
        if(i == arr1.length){
            finalArray[k++] = arr2[j++]
        }
        if(j == arr2.length){
            finalArray[k++] = arr2[i++]
        }
    }
    console.log(finalArray)
}
let arr1=[10,20,30,40];
let arr2=[15,50,80];
let mergedArray = mergeSortedArrays(arr1, arr2)