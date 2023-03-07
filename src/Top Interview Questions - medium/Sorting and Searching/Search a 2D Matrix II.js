var searchMatrix = function(matrix=[[0]], target=0) {
    let [topIdx, rightIdx] = [0, matrix[matrix.length - 1].length - 1];

    while (topIdx < matrix.length && rightIdx >= 0) {
        if (matrix[topIdx][rightIdx] > target) rightIdx--;
        else if (matrix[topIdx][rightIdx] < target) topIdx++;
        else if (matrix[topIdx][rightIdx] === target) return true;
    }

    return false;
};

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20)