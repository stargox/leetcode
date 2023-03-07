// url: https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    let startIdx = 0;
    let endIdx = s.length - 1;
    while (startIdx < endIdx) {
        if (!isAlphaNumeric(s[startIdx])) {
            startIdx++;
            continue;
        }
        if (!isAlphaNumeric(s[endIdx])) {
            endIdx--;
            continue;
        }

        if (s[startIdx++].toLowerCase() !== s[endIdx--].toLowerCase()) {
            return false;
        }
    }
    return true;
};

const isAlphaNumeric = ch => 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '0' <= ch && ch <= '9' ;
