// url: https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s
    }

    if (s.length === 2) {
        return s[0] === s[1] ? s : s[0];
    }

    let [maxLength, maxStartIdx, maxEndIdx] = [0, -1, -1];

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i]===s[i+1]) {
            const length = getSymmetricLength(s, i, i + 1);
            if (length > maxLength) {
                [maxLength, maxStartIdx, maxEndIdx] = [length, i + 1 - length, i + length];
            }
        }
    }

    for (let i = 0; i < s.length - 2; i++) {
        if (s[i]===s[i+2]) {
            const length = getSymmetricLength(s, i, i + 2);
            if (length + 1 > maxLength) {
                [maxLength, maxStartIdx, maxEndIdx] = [length, i + 1 - length, i + 1 + length];
            }
        }
    }

    const palindrome = maxLength ? s.slice(maxStartIdx, maxEndIdx + 1) : s[0];

    return palindrome;
};

const getSymmetricLength = (s, startIdx, endIdx) => {
    let length = 0;
    while (s[startIdx - length] && s[startIdx - length] === s[endIdx + length]) {
        length++;
    }

    return length;
}