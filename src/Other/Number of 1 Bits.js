// url: https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n = n >>> 1;
    }
    return count;
};
