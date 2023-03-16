// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/824/

var majorityElement = function(nums = [3,2,3]) {
    let targetElement = null;
    let count = 0;

    for (let num of nums) {
        if (!count) targetElement = num;

        count += targetElement === num ? 1 : -1;
    }

    return targetElement;
};

majorityElement();
