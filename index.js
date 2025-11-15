function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2 || num==3) return true;
    if (num % 2 === 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}  
module.exports = isPrime;
// Example usage:
console.log(isPrime(11));
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(2));
