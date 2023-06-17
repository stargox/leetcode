// url: https://leetcode.com/problems/replace-words/

var replaceWords = function(dictionary=['a'], sentence='ab') {
    dictionary.sort((a,b) => a.length - b.length);

    const result  = sentence
        .split(' ')
        .map(word => dictionary.find(key => word.startsWith(key)) || word)
        .join(' ');

    return result;
};

replaceWords(['cat','rat','bat'], 'the cattle was rattled by the battery'); // 'the cat was rat by the bat'
// replaceWords(['a','b','c'], 'aadsfasf absbs bbab cadsfafs'); // 'a a b c'
