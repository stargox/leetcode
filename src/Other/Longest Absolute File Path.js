// url: https://leetcode.com/problems/longest-absolute-file-path/

var lengthLongestPath = function(input='') {
    let isFile = false;
    let maxPathLength = 0;
    let currPathLength = 0;
    let currPathPartLength = 0;
    let level = 0;
    const pathPartsLengths = [];
    for(let idx = 0; idx <= input.length; idx++) {
        if (idx === input.length  || input[idx] === '\n') {
            const pathSeparatorLength = pathPartsLengths.length ? 1 : 0; // root dir don't have separator
            currPathLength += pathSeparatorLength;
            currPathPartLength += pathSeparatorLength;

            pathPartsLengths.push(currPathPartLength);

            if (isFile) {
                maxPathLength = Math.max(maxPathLength, currPathLength);
            }

            level = 0;
            currPathPartLength = 0;
            isFile = false;
        } else if (input[idx] === '\t') {
            level++;
        } else {
            if (level < pathPartsLengths.length) {
                const levelDiff = pathPartsLengths.length - level;
                for (let lIdx = 0; lIdx < levelDiff; lIdx++) {
                    const pathPartLength = pathPartsLengths.pop();
                    currPathLength -= pathPartLength;
                }
            }

            currPathPartLength++;
            currPathLength++;

            if (input[idx] === '.') {
                isFile = true;
            }
        }
    }

    return maxPathLength;
};


// dir
// ⟶ subdir1
// ⟶ ⟶ file1.ext
// ⟶ ⟶ subsubdir1
// ⟶ subdir2
// ⟶ ⟶ subsubdir2
// ⟶ ⟶ ⟶ file2.ext
lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext');