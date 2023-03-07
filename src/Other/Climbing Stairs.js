// url: https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let [twoStepsBefore, oneStepBefore, currentStep] = [1, 2, null];
    
    for (let i = 2; i < n; i++) {
        currentStep = twoStepsBefore + oneStepBefore;
        [twoStepsBefore, oneStepBefore] = [oneStepBefore, currentStep];
    }

    return currentStep;
};