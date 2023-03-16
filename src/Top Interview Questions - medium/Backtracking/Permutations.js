// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/795/

var permute = function(nums = [0]) {
    let lastPermutations = [];

    for (let num of nums) {
        if (!lastPermutations.length) {
            lastPermutations.push([num]);
            continue;
        }

        const currentPermutations = [];
        for (let permutation of lastPermutations) {
            for (let idx = 0; idx <= permutation.length; idx++) {
                currentPermutations.push([
                    ...permutation.slice(0, idx),
                    num,
                    ...permutation.slice(idx, permutation.length)
                ]);
            }
        }

        lastPermutations = currentPermutations;
    }

    return lastPermutations;
}

permute([1,2,3]);