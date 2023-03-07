// url: https://leetcode.com/problems/fizz-buzz/

var fizzBuzz = function(n) {
    return Array.from(Array(n)).map((_, index) => {
        const number = index + 1;
        const isDivisibleBy3 = !(number % 3);
        const isDivisibleBy5 = !(number % 5);
        
        if (isDivisibleBy3 && isDivisibleBy5) {
            return 'FizzBuzz';
        }
        if (isDivisibleBy3) {
            return 'Fizz';
        }
        if (isDivisibleBy5) {
            return 'Buzz';
        }
        return `${number}`;
    });
};