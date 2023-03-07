// url: https://leetcode.com/problems/increasing-triplet-subsequence/

var increasingTriplet = function(nums) {
    let [firstNum, secondNum] = [Infinity, Infinity];
    for (let num of nums) {
        if (num <= firstNum) {
            firstNum = num;
        } else if (num <= secondNum) {
            secondNum = num;
        } else {
            return true;
        }
    }

    return false;
};
