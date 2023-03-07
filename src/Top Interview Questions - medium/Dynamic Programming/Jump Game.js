// Jump Game
// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/
const canJump = (nums = [2,3,1,1,4], offset = 0) => {
    const targetIdx = nums.length - 1 - offset;
    if (targetIdx === 0) {
        return true;
    }

    for (let idx = targetIdx - 1; idx >= 0; idx--) {
        const current = nums[idx];
        const isReachable = idx + current >= targetIdx;
        if (isReachable) {
            return canJump(nums, nums.length - 1 - idx);
        }
    }

    return false;
};

canJump();