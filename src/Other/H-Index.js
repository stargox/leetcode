// url: https://leetcode.com/problems/h-index/

var hIndex = function(citations = [0]) {
    citations.sort((a, b) => a - b);

    for (let idx = 0; idx < citations.length; idx++) {
        const remainPublicationsCount = citations.length - idx;

        if (remainPublicationsCount <= citations[idx]) {
            return remainPublicationsCount;
        }
    }

    return 0;
};

// hIndex([3,0,6,1,5]);
// hIndex([1,3,1]);
hIndex([4,4,4,4,4,4,5]);