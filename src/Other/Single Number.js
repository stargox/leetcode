// url: https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    return nums.reduce((acc, curr) => acc ^ curr, 0);
};