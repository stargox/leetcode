// url: https://leetcode.com/problems/count-and-say/

var countAndSay = function(n = 1) {
    let resultChars = ['1'];
    while (--n) {
        const stepChars = [];
        let count = 1;
        for(let i = 0; i < resultChars.length; i++) {
            if (resultChars[i] !== resultChars[i + 1]) {
                stepChars.push(`${count}`, resultChars[i]);
                count = 1;
            } else {
                count++;
            }
        }

        resultChars = stepChars;
    }

    return resultChars.join('');
};