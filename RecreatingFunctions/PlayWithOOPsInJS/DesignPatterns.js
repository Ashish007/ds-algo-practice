// modular pattern
var modular = (function(){
    var a = 1
    const funfun = function(){
        console.log("modular function",a)
    }
    return {funfun : funfun}
})()
modular.funfun()

//singleton pattern
const printer = (function(){
    let firstVar;
    let fun2 = function(){
        console.log('fun2')
        firstVar = 5
    }
    return{
        getInstance : function(){
            console.log('firstVar::',firstVar)
            if(!firstVar){
                fun2();
            }
            return firstVar
        }
    }
})()
const val1 = printer.getInstance();
const val2 = printer.getInstance();
console.log(val1)
console.log(val2)

const vehicle = function(){
}