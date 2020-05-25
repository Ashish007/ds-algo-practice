function firstUniqueChar(str){
    let arr = str.split("");
    let finalString="";
    let obj={};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]] + 1 
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    console.log(obj)
    for(let o in obj){
        // if(obj[o] == 1){
            // return o;
        // }
        finalString+=(obj[o]+o)
    }
    return finalString;
}
let uniqChar = firstUniqueChar("aabdc")
console.log(uniqChar)