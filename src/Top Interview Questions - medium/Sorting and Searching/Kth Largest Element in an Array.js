var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(nums, left, right, k) {
    if (nums.length <= 1) return 1;

    const index = partition(nums, left, right);
    const indexFromEnd = right - index;

    if ((indexFromEnd + 1) === k) return nums[index];
    if ((indexFromEnd + 1) > k) return quickSelect(nums, index + 1, right, k);
    return quickSelect(nums, left, index - 1, k - indexFromEnd - 1);
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let [leftPointer, rightPointer] = [left, right];
    for (let idx = left; idx <= right; idx++) {
        if (nums[idx] < pivot) {
            [nums[idx], nums[leftPointer]] = [nums[leftPointer], nums[idx]];
            leftPointer++;
        }
    }

    [nums[right], nums[leftPointer]] = [nums[leftPointer], nums[right]]

    return leftPointer;
}


// function partition(nums, left, right) {
//     const pivot = nums[Math.floor((right + left) / 2)];
//     let [leftPointer, rightPointer] = [left, right];
//     while (leftPointer <= rightPointer) {
//         while (nums[leftPointer] < pivot) leftPointer++;
//         while (nums[rightPointer] > pivot) rightPointer--;

//         if (leftPointer <= rightPointer) {
//             [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer], nums[leftPointer]];
//             leftPointer++;
//             rightPointer--;
//         }
//     }

//     return leftPointer;
// }

findKthLargest([9, 1, 10, 3, 5, 5, 9, 14, 8, 3, 2, 7, 9], 2);