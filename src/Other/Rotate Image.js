// url: https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    transpose(matrix);
    flipX(matrix)
};

var flipX = function(matrix = [[]]) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix.length / 2; x++) {
            [matrix[y][x], matrix[y][matrix.length - 1 - x]] = [matrix[y][matrix.length - 1 - x], matrix[y][x]];
        }
    }
};

var transpose = function(matrix = [[]]) {
    for(let y = 0; y < matrix.length; y++) {
        for(let x = y; x < matrix.length; x++) {
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
};