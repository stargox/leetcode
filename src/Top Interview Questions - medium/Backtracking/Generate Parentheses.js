// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/794/

var generateParenthesis = function(n) {
    const outputCombinationLength = 2 * n;

    const combinationsLevels = [];
    const combinations = [];
    while ((combinations[0] || '').length < outputCombinationLength) {
        const combination = combinations.shift() || '';
        const level = combinationsLevels.shift() || 0;

        const remainLevels = outputCombinationLength - combination.length;

        if (isWllFormed(level + 1, remainLevels - 1)) {
            combinationsLevels.push(level + 1);
            combinations.push(`${combination}(`);
        }

        if (isWllFormed(level - 1, remainLevels - 1)) {
            combinationsLevels.push(level - 1);
            combinations.push(`${combination})`);
        }
    }

    return combinations;
};

const isWllFormed = (level, remainLevels) => 0 <= level && level <= remainLevels;

generateParenthesis(3);