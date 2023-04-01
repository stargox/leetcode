// url: https://leetcode.com/problems/minimum-path-sum/

var minPathSum = function(grid=[[0]]) {
    const height = grid.length;
    const width = grid[0].length;

    for (let y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            if (y === 0 && x !== 0) grid[y][x] += grid[y][x - 1];
            else if (y !== 0 && x === 0) grid[y][x] += grid[y - 1][x];
            else if (y !== 0 && x !== 0) grid[y][x] += Math.min(grid[y][x - 1], grid[y - 1][x]);
        }
    }

    return grid[height - 1][width - 1];
};

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);

