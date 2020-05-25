function debounce(func, wait) {
    var timeout;
	return function() {
		clearTimeout(timeout);
		timeout = setTimeout(func, wait);
	};
};
let log = function(){
    console.log('sasasas')
}
var myEfficientFn = debounce(log, 3000);
myEfficientFn()
myEfficientFn()
myEfficientFn()
myEfficientFn()

