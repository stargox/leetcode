// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/

var letterCombinations = function(digits = "23") {
    const numChars = ["", "", "abc", "def", "ghi", "jkl", "mon", "pqrs", "tuv", "wxyz"];

    const combinations = [];
    for (let digitIdx = 0; digitIdx < digits.length; digitIdx++) {
        const digit = Number.parseInt(digits[digitIdx]);
        const digitChars = numChars[digit];


        while ((combinations[0] || '').length < digitIdx + 1) {
            const combination = combinations.shift() || '';

            for (let charIdx = 0; charIdx < digitChars.length; charIdx++) {
                combinations.push(`${combination}${digitChars[charIdx]}`);
            }
        }
    }

    return combinations;
};

letterCombinations1('23')