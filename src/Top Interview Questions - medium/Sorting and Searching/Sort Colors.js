// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/

var sortColors = function(nums = [0]) { 
    let [red, white, blue] = [0, 0, nums.length - 1];
    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[red], nums[white]] = [nums[white], nums[red]];
            white++;
            red++;
        } else if (nums[white] === 1) {
            white++;
        } else {
            [nums[blue], nums[white]] = [nums[white], nums[blue]];
            blue--;
        }
    }
};

sortColors([2,0,1])