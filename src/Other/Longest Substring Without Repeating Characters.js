// url: https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let maxCount = 0;

    let uniqueFromIndex = 0;
    for (let index = 0; index < s.length; index++) {
        if (map.has(s[index]) && map.get(s[index]) >= uniqueFromIndex) {
            const diff = index - uniqueFromIndex;
            maxCount = Math.max(maxCount, diff);
            uniqueFromIndex = map.get(s[index]) + 1;
        }

        map.set(s[index], index);
    }

    return Math.max(maxCount, s.length - uniqueFromIndex);
};
