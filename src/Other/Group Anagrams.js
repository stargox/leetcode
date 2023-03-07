// url: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    const hashMap = new Map();
    for(let i = 0; i < strs.length; i++) {
        const hash = createAlphabetHash(strs[i]);
        if (!hashMap.has(hash)) {
            hashMap.set(hash, []);
        }
        hashMap.get(hash).push(strs[i]);
    }

    return Array.from(hashMap.values());
};

const createAlphabetHash = (string = '') => {
    const hashArray = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0);
    for(let i = 0; i < string.length; i++) {
        const charHashIndex = string[i].charCodeAt(0) - 'a'.charCodeAt(0);
        hashArray[charHashIndex]++
    }
    return hashArray.join(',');
}
