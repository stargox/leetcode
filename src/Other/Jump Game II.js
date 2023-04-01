// url: https://leetcode.com/problems/jump-game-ii/solutions/770191/cpp-recursive-memoization-o-n-three-solution-easy-to-understand/

var jump = function(nums = [0]) {
    let jumpsCount = 0;
    let maxJumpEndIdx = 0;
    let prevMaxJumpEndIdx = 0;

    for (let idx = 0; idx < nums.length - 1; idx++) {
        maxJumpEndIdx = Math.max(maxJumpEndIdx, idx + nums[idx]);

        if (idx === prevMaxJumpEndIdx) {
            jumpsCount++;
            prevMaxJumpEndIdx = maxJumpEndIdx;
        }
    }

    return jumpsCount;
};

jump([2,3,1,1,4]);
