// url: https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    const set = new Set();
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === '.') {
                continue;
            }

            const valueInColumn = `col${y},val${board[y][x]}`;
            const valueInRow = `row${x},val${board[y][x]}`;
            const valueInGroup = `group${Math.ceil((x + 1)/3)},${Math.ceil((y + 1)/3)},val${board[y][x]}`;
            if (set.has(valueInColumn) || set.has(valueInRow) || set.has(valueInGroup)) {
                return false;
            }

            set.add(valueInColumn);
            set.add(valueInRow);
            set.add(valueInGroup);
        }
    }

    return true;
};

isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])