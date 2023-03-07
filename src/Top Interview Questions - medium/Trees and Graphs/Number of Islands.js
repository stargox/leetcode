// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/792/

var numIslands = function(grid) {
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '1') {
                count++;
                visitIsland(grid, y, x)
            }
        }
    }

    return count;
};

const visitIsland = (grid = [['0']], y = -1, x = -1) => {
    if (!grid[y] || !grid[y][x] || grid[y][x] !== '1') {
        return;
    }

    grid[y][x] = '-1';
    visitIsland(grid, y + 1, x);
    visitIsland(grid, y, x + 1);
    visitIsland(grid, y - 1, x);
    visitIsland(grid, y, x - 1);
}