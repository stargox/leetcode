// url: https://leetcode.com/problems/maximum-subarray/

// var maxSubArray = function(nums) {
//     let [largestSum, currSum] = [0,0];
//     for (let i = 0; i < nums.length; i++) {
//         currSum = Math.max(0, currSum + nums[i]);
//         largestSum = Math.max(currSum, largestSum);
//     }
//     return largestSum || Math.max(...nums);
// };


var maxSubArray = function(nums=[]) {
    let [maxSum, currSum] = [nums[0], nums[0]];

    for (let idx = 1; idx < nums.length; idx++) {
        currSum = Math.max(nums[idx], currSum + nums[idx]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
maxSubArray([-1]);
