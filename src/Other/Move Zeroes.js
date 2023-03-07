// url: https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let nonZeroIdx = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] != 0) {
            [nums[idx], nums[nonZeroIdx]] = [nums[nonZeroIdx], nums[idx]];
            nonZeroIdx++;
        }
    }
};