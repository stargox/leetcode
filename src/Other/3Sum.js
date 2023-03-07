// url: https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    const sums = [];

    const { belowZero, aboveZero, zeroCount } = splitBySign(nums);

    // three zero values case
    if (zeroCount >= 3) {
        sums.push([0, 0, 0]);
    }

    if (zeroCount >= 1) {
    // one zero value case
    oneZeroFixedSum(belowZero, aboveZero, sums);
    }

    // two same value below zero case
    twoSameNumberFixedSum(belowZero, aboveZero, sums);

    // two same value above zero case
    twoSameNumberFixedSum(aboveZero, belowZero, sums);

    // two different value below zero case
    twoDifferentNumberFixedSum(aboveZero, belowZero, sums);

    // two different value above zero case
    twoDifferentNumberFixedSum(belowZero, aboveZero, sums);
    
    return sums
};

const splitBySign = (nums) => {
    const belowZero = new Map();
    const aboveZero = new Map();
    let zeroCount = 0;

    for(let num of nums) {
        if (num < 0) {
            belowZero.set(num, (belowZero.get(num) || 0) + 1);
        } else if (num > 0) {
            aboveZero.set(num, (aboveZero.get(num) || 0) + 1);
        } else {
            zeroCount++;
        }
    }

    return { belowZero, aboveZero, zeroCount  };
}

const oneZeroFixedSum = (dict, inverseSignDict, sums) => {
    for(let num of dict.keys()) {
        for(let inverseSignNum of inverseSignDict.keys()) {
            if (inverseSignNum + num === 0) {
                sums.push([0, num, inverseSignNum]);
            }
        }
    }
};

const twoSameNumberFixedSum = (dict, inverseSignDict, sums) => {
    for(let num of dict.keys()) {
        if (dict.get(num) < 2) {
            continue;
        }

        for(let inverseSignNum of inverseSignDict.keys()) {
            if (num + num + inverseSignNum === 0) {
                sums.push([num, num, inverseSignNum]);
            }
        }
    }
};

const twoDifferentNumberFixedSum = (dict, inverseSignDict, sums) => {
    for(let num of dict.keys()) {
        for(let inverseSignNum of inverseSignDict.keys()) {
            const complimentInverseSignNum = -(num + inverseSignNum);
            if (Math.sign(inverseSignNum) !== Math.sign(complimentInverseSignNum)) {
                continue;
            }

            if (inverseSignDict.get(complimentInverseSignNum) && inverseSignNum < complimentInverseSignNum) {
                sums.push([num, inverseSignNum, complimentInverseSignNum]);
            }
        }
    }
};