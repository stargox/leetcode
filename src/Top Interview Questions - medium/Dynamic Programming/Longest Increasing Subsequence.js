// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/

var lengthOfLIS = function(nums = [10,9,2,5,3,7,101,18]) {
    const dp = Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] <= nums[j]) continue;

            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }

    return Math.max(...dp);
};

lengthOfLIS();