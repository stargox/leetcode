// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/808/

var uniquePaths1 = function(m, n) {
    const pathCounts = [Array(n).fill(1), ...Array(m - 1).fill().map(() => [1])];

    for (let y = 1; y < m; y++) {
        for (x = 1; x < n; x++) {
            pathCounts[y][x] = pathCounts[y][x - 1] + pathCounts[y - 1][x];
        }
    }

    return pathCounts[m - 1][n - 1];
};

var uniquePaths = function(m, n) {
    let preCounts = Array(n).fill(1);
    let currCounts = Array(n).fill(1);

    for (let y = 1; y < m; y++) {
        for (x = 1; x < n; x++) {
            currCounts[x] = preCounts[x] + currCounts[x - 1];
        }
        [preCounts, currCounts] = [currCounts, preCounts];
    }

    return preCounts[n - 1];
};


uniquePaths(4, 7);