// url: https://leetcode.com/problems/triangle/

var minimumTotal = function(triangle = [[0]]) {
    for(let y = 0; y < triangle.length; y++) {
        for(let x = 0; x < triangle[y].length; x++) {
            if (y === 0 && x === 0) continue;
            else if (x === 0) triangle[y][x] += triangle[y - 1][0];
            else if (x === triangle[y].length - 1) triangle[y][x] += triangle[y - 1][x - 1];
            else triangle[y][x] += Math.min(triangle[y - 1][x - 1], triangle[y - 1][x]);
        }
    }

    return Math.min(...triangle[triangle.length - 1]);
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);
