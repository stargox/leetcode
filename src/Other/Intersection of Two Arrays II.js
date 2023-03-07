// url: https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    const intersections = [];
    const numsMap = new Map();
    nums1.forEach(num => {
      const updatedCount = (numsMap.get(num) || 0) + 1;
      numsMap.set(num, updatedCount);
    });

    nums2.forEach(num => {
      const countInNums1 = numsMap.get(num);
      if (countInNums1) {
        intersections.push(num);
        numsMap.set(num, countInNums1 - 1);
      }
    });

    return intersections
};