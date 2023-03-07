// url: https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    let [hasFirstRowZero, hasFirstColumnZero] = [false, false];
    matrix.forEach((row, rowIdx) => row.forEach((cell, columnIdx) => {
        if (cell === 0) {
            row[0] = 0;
            matrix[0][columnIdx] = 0;

            if (rowIdx === 0) {
                hasFirstRowZero = true;
            }
            if (columnIdx === 0) {
                hasFirstColumnZero = true;
            }
        }
    }));

    matrix[0].forEach((cell, columnIdx) => {
        if (cell === 0 && columnIdx !== 0) {
            matrix.forEach(row => {
                row[columnIdx] = 0;
            })
        }
    });
    
    matrix.forEach((row, rowIdx) => {
        if (row[0] === 0 && rowIdx !== 0) {
            row.forEach((_, cellIdx) => {
                row[cellIdx] = 0;
            })
        }
    });

    if (hasFirstRowZero) {
        matrix[0].fill(0);
    }
    if (hasFirstColumnZero) {
        matrix.forEach(row => {
            row[0] = 0;
        });
    }
};
