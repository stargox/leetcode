// url: https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

const reverse = (nums, from, to) => {
  for (let i = 0; i < (to - from) / 2; i++) {
    [nums[from + i], nums[to - i]] = [nums[to - i], nums[from + i]]
  }
}