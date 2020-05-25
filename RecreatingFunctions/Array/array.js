let arr = [1,2,3,4,5];

// Polyfill for map function
Array.prototype.customMap = function(callback){
    let newArr = [];
    for(let i=0; i<this.length; i++){
        newArr[i] = callback(this[i])
    }
    return newArr
}

let newArr = arr.customMap((v,i) => v+=1)
console.log(newArr)

const sum = function(a,b){
    return a+b
}
let arr1 = [1,2]
Array.prototype.log = function(f){
    console.log('customLog',f(this[0],this[1]))
}

arr1.log(sum)