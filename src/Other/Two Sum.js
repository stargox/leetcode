// url: https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    const map = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        const complementaryNum = target - nums[idx];
        const complementaryIdx = map.get(complementaryNum);
        if (complementaryIdx >= 0) {
            return [idx, complementaryIdx]
        } else {
            map.set(nums[idx], idx)
        }
    }

    return []
};

var solution = (nums, target) => {
    const map = new Map();
    
    for (let idx = 0; idx < nums.length; idx++) {
        const complementaryNum = target - nums[idx];
        const complementaryIdx = map.get(complementaryNum);

        if (complementaryIdx >= 0) {
            return [idx, complementaryIdx];
        } else {
            map.set(nums[idx], idx)
        }
    }
    return [];
}

solution([1,3,7,4], 7)