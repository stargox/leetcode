// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/826/

// var leastInterval = function(tasks = [], n = 0) {
//     const allTasks = Array('Z'.charCodeAt(0)-'A'.charCodeAt(0)).fill(0);

//     const tasksMap = new Map();
//     for(let task of tasks) {
//         tasksMap.set(task, (tasksMap.get(task) || 0) + 1)
//     }

//     let result = 0;

//     while (tasksMap.size) {
//         const size = tasksMap.size;
//         if (size === 1) {
//             const count = tasksMap.entries().next().value[1];
//             result += (n + 1) * count - n;
//             break
//         } else {
//             result += size;
//         }

//         for(let task of tasksMap.keys()) {
//             const taskCount = tasksMap.get(task);
//             if (taskCount === 1) tasksMap.delete(task);
//             else tasksMap.set(task, taskCount - 1);
//         }
//     }

//     return result;
// };

var leastInterval = function(tasks = [], n = 0) {
    let mostFrequentCount = 0;
    let tasksByCharIndex = Array('Z'.charCodeAt(0)-'A'.charCodeAt(0) + 1).fill(0);
    for(let task of tasks) {
        const charIndex = task.charCodeAt(0)-'A'.charCodeAt(0)
        tasksByCharIndex[charIndex]++;
        mostFrequentCount = Math.max(mostFrequentCount, tasksByCharIndex[charIndex]);
    }

    let result = (mostFrequentCount - 1) * (n + 1);
    for (let tasksCount of tasksByCharIndex) {
        if (tasksCount === mostFrequentCount) result++;
    }

    return Math.max(tasks.length, result);
};

// leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2);
// leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2);
leastInterval(["A","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 29);