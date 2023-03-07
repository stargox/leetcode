// url: https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    let sum = 0;
    let fullSum = nums.length;
    for (let idx = 0; idx < nums.length; idx++) {
        sum += nums[idx];
        fullSum += idx;
    }

    return fullSum - sum;
};
