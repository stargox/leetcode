// url: https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    const output = [];
const total = Math.pow(2, nums.length);

for(let i = 0; i < total; i++) {
    const mask = Number(i).toString(2);
    const subset = [];
    for(let j = 0; j < mask.length; j++) {
        if (mask[j]==='1') {
            const maskOffset = nums.length - mask.length;
            subset.push(nums[maskOffset + j]);
        }
    }
    output.push(subset);
}
return output;
};