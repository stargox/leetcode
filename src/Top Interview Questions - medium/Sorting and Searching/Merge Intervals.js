// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/

var merge = function(intervals=[[0, 0]]) {
    intervals.sort((a, b) => a[0] - b[0]);

    const results = [];
    let [leftBound, rightBound] = intervals[0]
    for(let idx = 1; idx < intervals.length; idx++) {
        const [currLeftBound, currRightBound] = intervals[idx];

        if (currLeftBound <= rightBound) {
            rightBound = Math.max(rightBound, currRightBound);
        }
        else {
            results.push([leftBound, rightBound]);
            [leftBound, rightBound] = [currLeftBound, currRightBound];
        }
    }

    results.push([leftBound, rightBound]);

    return results;
};

merge([[1,3],[2,6],[8,10],[15,18]]);