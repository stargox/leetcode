// url: https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    const mapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let num = 0;

    const lastIdx = s.length - 1;
    for (let idx = lastIdx; idx >= 0; idx--) {
        if (idx !== lastIdx && mapping[s[idx]] < mapping[s[idx + 1]]) {
            num -= mapping[s[idx]]
        } else {
            num += mapping[s[idx]]
        }
    }

    return num;
};