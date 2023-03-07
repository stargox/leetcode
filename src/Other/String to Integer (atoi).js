// url: https://leetcode.com/problems/string-to-integer-atoi/

const minValue = Math.pow(-2, 31);
const maxValue = Math.pow(2, 31) - 1;
var myAtoi = function(s = '') {
    let idx = 0;
    let result = 0;
    let sing = 0;
    while (idx < s.length) {
        if (!result && !sing) {
            if (s[idx] === ' ') {
                idx++;
                continue;
            }

            if (s[idx] === '-') {
                idx++;
                sing = -1;
                continue;
            } else {
                sing = 1;

                if (s[idx] === '+') {
                    idx++;
                    continue;
                }
                
            }
        } 
        if (s[idx] < '0' || '9' < s[idx]) {
            return result;
        }

        result = result * 10 + sing * (+s[idx++]);

        if (result <= minValue) {
            return minValue;
        } else if (result >= maxValue) {
            return maxValue;
        }
    }

    return result;
};