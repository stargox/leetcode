// url: https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
    const output = [[1]];
    
    for(let rowIdx = output.length; rowIdx < numRows; rowIdx++) {
        const prevRowNums = output[rowIdx - 1];
        const rowNums = [1];
        for (let colIdx = 0; colIdx < prevRowNums.length - 1; colIdx++) {
            rowNums.push(prevRowNums[colIdx] + prevRowNums[colIdx + 1]);
        }
        rowNums.push(1)
        output.push(rowNums);
    }

    return output;
};
