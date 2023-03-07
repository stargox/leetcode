// url: https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            return true
        }
        dict[nums[i]] = true;
    }
    
    return false;
};