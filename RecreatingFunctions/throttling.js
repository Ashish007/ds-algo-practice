function throttling(func, timeout){
 var timerId;
 if(timerId){
    return
 }
 timerId = setTimeout(function(){
     func()
     timerId = null;
    }, timeout);
}