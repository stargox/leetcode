// url: https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function(nums=[0]) {
    for (let idx = 0; idx < nums.length; idx++) {
        while (nums[idx] && nums[idx] !== idx + 1) {
            const numIdx = nums[idx] - 1;

            if (nums[idx] <= 0 || nums[idx] > nums.length || nums[idx] === nums[numIdx]) {
                nums[idx] = 0;
                continue;
            }

            [nums[idx], nums[numIdx]] = [nums[numIdx], nums[idx]];
        }
    }

    for (let idx = 0; idx < nums.length; idx++) {
        if (!nums[idx]) return idx + 1
    }

    return nums.length + 1;
};

firstMissingPositive([3,4,-1,1]);
//firstMissingPositive([1]);
//firstMissingPositive([1,1])