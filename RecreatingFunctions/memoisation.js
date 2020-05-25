function fibonacciSeries(n, memo){
    memo = memo || {}
    console.log(memo)
    if(memo[n])
        return memo[n]
    if(n<=1)
        return 1
    return memo[n] = fibonacciSeries(n-1, memo) + fibonacciSeries(n-2, memo)
}
console.log(fibonacciSeries(2,{}))