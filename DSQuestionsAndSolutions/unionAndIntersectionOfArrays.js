function unionOfArray(arr1, arr2){
    let arr = [...arr1, ...arr2]
    let unionArr = [];
    let intersectionArr = [];
    console.log(arr)
    let obj = {};
    for(let i=0; i<arr.length; i++){
        // obj[arr[i]] = i;
        if(obj[arr[i]])
            obj[arr[i]] = obj[arr[i]]+1
        else
            obj[arr[i]] = 1
    }
    console.log(obj)
    for(let i in obj){
        unionArr.push(parseInt(i))
    }
    for(let i in obj){
        if(obj[i]>1)
        intersectionArr.push(parseInt(i))
    }
    console.log(unionArr)
    console.log(intersectionArr)
}

unionOfArray([7, 1, 5, 2, 3, 6],[3, 8, 6, 20, 7]);