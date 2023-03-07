// url: https://leetcode.com/problems/reverse-bits/

var reverseBits = function(n) {
    let reversed = 0;
    for (let i = 0; i < 32; i++) {
        reversed = reversed << 1;
        reversed = reversed | (n & 1);
        n = n >>> 1;
    }
    
    return reversed >>> 0;
};

reverseBits(55)