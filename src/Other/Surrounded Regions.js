// url: https://leetcode.com/problems/surrounded-regions/

var solve = function(board=[['X']]) {
    const height = board.length;
    const width = board[0].length;
    const visited = Array.from(Array(height)).map(() => Array(width).fill(false));

    for (let y = 1; y < board.length - 1; y++) {
        for (let x = 1; x < board[y].length - 1; x++) {
            if (visited[y][x] || !isSurroundedRegion(board, visited, x, y)) continue;

            flipSurroundedRegion(board, x, y);
        }
    }
};

const isSurroundedRegion = (board=[['X']], visited=[[false]], x, y) => {
    if (board[y][x] === 'X' || visited[y][x]) return true
    if (x === 0 || x === board[y].length - 1 || y === 0 || y === board.length - 1) return false;

    visited[y][x] = true;
    const isTopSurrounded = isSurroundedRegion(board, visited, x + 1, y);
    const isBottomSurrounded = isSurroundedRegion(board, visited, x - 1, y);
    const isRightSurrounded = isSurroundedRegion(board, visited, x, y + 1);
    const isLeftSurrounded = isSurroundedRegion(board, visited, x, y - 1);
    return isTopSurrounded && isBottomSurrounded && isRightSurrounded && isLeftSurrounded;
};

const flipSurroundedRegion = (board=[['X']], x, y) => {
    if (board[y][x] !== 'O') return;

    board[y][x] = 'X';

    flipSurroundedRegion(board, x + 1, y);
    flipSurroundedRegion(board, x - 1, y);
    flipSurroundedRegion(board, x, y + 1);
    flipSurroundedRegion(board, x, y - 1);
};

solve([
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]]);
solve([
    ["O","X","X","O","X"],
    ["X","O","O","X","O"],
    ["X","O","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]]);
solve([
    ["X","O","X","O","X","O","O","O","X","O"],
    ["X","O","O","X","X","X","O","O","O","X"],
    ["O","O","O","O","O","O","O","O","X","X"],
    ["O","O","O","O","O","O","X","O","O","X"],
    ["O","O","X","X","O","X","X","O","O","O"],
    ["X","O","O","X","X","X","O","X","X","O"],
    ["X","O","X","O","O","X","X","O","X","O"],
    ["X","X","O","X","X","O","X","O","O","X"],
    ["O","O","O","O","X","O","X","O","X","O"],
    ["X","X","O","X","X","X","X","O","O","O"]]);
    
