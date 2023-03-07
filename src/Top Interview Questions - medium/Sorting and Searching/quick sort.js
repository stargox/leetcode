
function sort(nums = [3,4,5,2,3,4,6,2]) {
    quickSort(nums, 0, nums.length - 1)
    return;
}

function quickSort(nums, left, right) {
    if (left >= right || left < 0) return;

    const index = partition(nums, left, right);
    quickSort(nums, left, index - 1);
    quickSort(nums, index + 1, right);

    return;
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let leftPointer = left;
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

sort([1, 10, 3, 5, 5, 9, 14, 8, 3, 2, 11]);