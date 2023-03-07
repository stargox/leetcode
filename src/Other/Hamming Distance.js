// url: https://leetcode.com/problems/hamming-distance/

var hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        count += (x & 1) != (y & 1) ? 1 : 0;
        x = x >>> 1;
        y = y >>> 1;
    }
    
    return count;
};
