// url: https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
      
     while (n % 3 === 0) {
         n /= 3;
     }
      return n === 1;
  };

  var isPowerOfThree2 = function(n) {
    if (n === 0) {
        return false;
    }

    const log3n = Math.round(Math.log(n) / Math.log(3));


    return n === Math.pow(3, log3n);
  };