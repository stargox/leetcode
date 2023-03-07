// url: https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    const pairs = [
        { open: '(', close: ')' },
        { open: '{', close: '}' },
        { open: '[', close: ']' },
    ]
    const brackets = [];
    for (let idx = 0; idx < s.length; idx++) {
        const pair = pairs.find(pair => pair.open === s[idx] || pair.close === s[idx]);

        if (!pair) {
            continue;
        }
        
        if (pair.open === s[idx]) {
            brackets.push(s[idx])
        } else if (pair.close === s[idx]) {
            const lastBracket = brackets[brackets.length - 1];
            if (lastBracket !== pair.open) {
                return false;
            }

            brackets.pop();
        }
    }

    return brackets.length === 0;
};
