// url: https://leetcode.com/problems/shuffle-an-array/

var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const result =  Array.from(this.nums);
    for (let i = 0; i < result.length; i++) {
        const j = getRandomIndex(result.length);
        [result[i],result[j]]=[result[j],result[i]];
    }
    return result;
};

const getRandomIndex = (length) => {
    return Math.round(-0.5+Math.random() * length);
};


// public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> items, IRandom random)
// {
//     var list = items.ToList();
//     int index = list.Count;

//     while (index > 1)
//     {
//         index--;
//         int randomIndex = random.Next(index + 1);
//         (list[index], list[randomIndex]) = (list[randomIndex], list[index]);
//     }

//     return list;
// }