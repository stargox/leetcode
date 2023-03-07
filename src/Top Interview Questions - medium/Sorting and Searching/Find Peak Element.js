// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/801/

var findPeakElement = function(nums = [1,2]) {
    if (nums[0] > nums[1]) return 0
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
    let [leftIdx, rightIdx] = [0, nums.length - 1];

    while (leftIdx <= rightIdx) {
        const midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);

        if (nums[midIdx - 1] < nums[midIdx]) {
            if (nums[midIdx + 1] < nums[midIdx]) {
                return midIdx;
            } else {
                leftIdx = midIdx;
            }
        } else {
            rightIdx = midIdx;
        }

        if (rightIdx === 0) return 0;
        if (leftIdx === nums.length - 1) nums.length - 1;
    }

    return -1;
};

findPeakElement()