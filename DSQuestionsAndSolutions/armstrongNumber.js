function armstrongNumber(n){
        let sum = r = 0;
        let num = n;
        while(num>0){
            r = num%10;
            sum = sum + (r*r*r);
            num = Math.floor(num/10)
        }
        return (sum == n)
}
console.log(armstrongNumber(154))