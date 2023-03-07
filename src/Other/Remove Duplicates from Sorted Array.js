// url: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let nextValueIndex = 0;
    let i = 0;
    while (nextValueIndex < nums.length) {
      nextValueIndex = getNextValueIndex(nums, nextValueIndex);
      nums[i++] = nums[nextValueIndex - 1];
    }

    nums.splice(i);
};

var getNextValueIndex = function(nums, valueIndex) {
  for (let i = valueIndex + 1; i < nums.length; i++) {
    if (nums[i] !== nums[valueIndex]) return i;
  }
  return nums.length;
};