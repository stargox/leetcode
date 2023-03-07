// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/799/

var topKFrequent = function(nums = [1, 2, 2], k = 1) {
    const countsByNum = new Map();
    let maxCount = 0;

    for(let num of nums) {
        const numCount = (countsByNum.get(num) || 0) + 1;
        countsByNum.set(num, numCount);
        if (numCount > maxCount) maxCount = numCount;
    }

    const numsCount = Array(maxCount + 1).fill(undefined);
    for(let [num, count] of countsByNum) {
        if (!numsCount[count]) numsCount[count] = [];

        numsCount[count].push(num);
    }

    const mostFrequent = [];
    for (let idx = numsCount.length - 1; idx >= 0; idx--) {
        if (numsCount[idx]) {
            for (num of numsCount[idx]) {
                mostFrequent.push(num);
            }
        }

        if (mostFrequent.length === k) break;
    }

    return mostFrequent;
};

topKFrequent([1,1,1,2,2,3,5,5,5], 2);