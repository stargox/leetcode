// url: https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let result = 0
    const sign = Math.sign(x);
    let absX = Math.abs(x);
    const maxNumber = x > 0 ? Math.pow(2, 31) - 1 : Math.pow(2, 31);
    while (absX > 0) {
        result = result * 10 + absX % 10;
        absX = Math.floor(absX / 10);
        
        if (result > maxNumber) {
            return 0;
        }
    }
    return sign * result;
};
