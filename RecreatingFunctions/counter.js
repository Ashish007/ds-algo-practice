let counter = (function(){
    var val = 0;
    return function(){
            val+=1;
            return val;
    }
})()

let o =counter();
o = counter();
o = counter();
console.log(o)
// console.log(val)