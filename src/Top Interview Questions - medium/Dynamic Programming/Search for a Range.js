// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/

var searchRange = function(nums = [5,7,7,8,8,10], target = 8) {
    const leftPosition = binarySearch(nums, position => {
        if (nums[position] === target && nums[position - 1] !== target) return 0;
        else if (nums[position] < target) return -1;
        return 1 ;
    });
    const rightPosition = binarySearch(nums, position => {
        if (nums[position] === target && nums[position + 1] !== target) return 0;
        else if (nums[position] <= target) return -1;
        return 1 ;
    });

    return [leftPosition, rightPosition];
};

const binarySearch = (nums, compareFn) => {
    let [leftIdx, rightIdx] = [0, nums.length - 1];

    while (leftIdx <= rightIdx) {
        const middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        const compareResult = compareFn(middleIdx);

        if (compareResult > 0) rightIdx = middleIdx - 1;
        else if (compareResult < 0) leftIdx = middleIdx + 1;
        else return middleIdx;
    }

    return -1;
}

searchRange();