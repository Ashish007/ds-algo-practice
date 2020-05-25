// Recursion
function fibonacciSeries(n){
    if(n == 1 || n == 2)
        return 1
    return (fibonacciSeries(n-1) + fibonacciSeries(n-2))
}
console.log(fibonacciSeries(7))

// Loop
function fibonacciSeriesL(n){
    let finalNumber= firstNum = secNum = 1;
    for(let i=2; i<n; i++){
        finalNumber = firstNum+secNum;
        firstNum = secNum;
        secNum = finalNumber
    }
    console.log(finalNumber)
}
fibonacciSeriesL(7)