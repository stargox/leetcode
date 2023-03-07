// url: https://leetcode.com/problems/count-primes/

var countPrimes = function(n) {
    const allNumbers = Array.from(Array(n));
    let count = 0;

    for (let number = 2; number < allNumbers.length; number++) {
        const isCompositeNumber = allNumbers[number] === -1;
        if (isCompositeNumber) {
            continue;
        }
        count++;
        
        for (let numberComposite = number + number; numberComposite < allNumbers.length; numberComposite += number) {
            allNumbers[numberComposite] = -1;
        }
    }
    
    return count;
};
