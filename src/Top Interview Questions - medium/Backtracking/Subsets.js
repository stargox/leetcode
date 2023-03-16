// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/796/

var subsets1 = function(nums) {
    const results = [[]];
    for(let num of nums) {
        
        const rCount = results.length;
        
        for (let i = 0; i < rCount; i++) {
            results.push([...results[i], num]);
        }
    }
    
    return results;
};

subsets([1,2,3]);
