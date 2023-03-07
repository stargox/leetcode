// url: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function(haystack = '', needle = '') {
    if (!needle || haystack.startsWith(needle)) {
        return 0;
    }

    let needleHash = 0;
    for (let i = 0; i < needle.length; i++) {
        needleHash += needle.charCodeAt(i);
    }

    let haystackHash = 0; 
    for (let idx = 0; idx < haystack.length; idx++) {
        haystackHash += haystack.charCodeAt(idx);

        if (idx >= needle.length) {
            const hashStartIdx = idx - needle.length + 1;
            haystackHash -= haystack.charCodeAt(hashStartIdx - 1);

            if (needleHash === haystackHash && isEqualFrom(haystack, needle, hashStartIdx)) {
                return hashStartIdx;
            }
        }
    }

    return -1;
};

var isEqualFrom = function(haystack = '', needle = '', index) {
    for (let j = 0; j < needle.length; j++) {
        if (haystack[index + j] !== needle[j]) {
            return false;
        }
    }
    return true;
}