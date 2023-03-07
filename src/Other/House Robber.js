// url: https://leetcode.com/problems/house-robber/

var rob = function(nums) {
    let [prevPrev, prev] = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        [prev, prevPrev] = [Math.max(prevPrev + nums[i], prev), prev];
    }
    return prev;
};

