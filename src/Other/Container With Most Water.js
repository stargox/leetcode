// url: https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height=[0]) {
    let [leftIdx, rightIdx] = [0, height.length - 1];
    let maxVolume = 0;

    while (leftIdx < rightIdx) {
        const volume = (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]);
        maxVolume = Math.max(maxVolume, volume);

        if (height[leftIdx] > height[rightIdx]) rightIdx--;
        else leftIdx++;
    }

    return maxVolume
};

//maxArea([1,8,6,2,5,4,8,3,7]);
//maxArea([1,1]);
maxArea([2,3,4,5,18,17,6]);
