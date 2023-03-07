// url: https://leetcode.com/problems/maximum-number-of-eaten-apples/

// var eatenApples = function(apples=[1,2,3,5,2], days=[3,2,1,4,2]) {
//     let count = 0;
//     let lastAppleDaysStartIdx = null;
//     let lastAppleDaysEndIdx = null;
    

//     for (let idx = apples.length - 1; idx >= 0; idx--) {
//         let appleDays = Math.min(apples[idx], days[idx]);
//         let currAppleDaysStartIdx = idx;
//         let currAppleDaysEndIdx = idx + appleDays - 1;

//         if (lastAppleDaysStartIdx === null && appleDays === 0) {
//             continue;
//         }

//         if (lastAppleDaysStartIdx === null && appleDays != 0) {
//             lastAppleDaysStartIdx = currAppleDaysStartIdx;
//             lastAppleDaysEndIdx = currAppleDaysEndIdx;
//             continue;
//         }

//         if (appleDays === 0) {
//             count += lastAppleDaysEndIdx - lastAppleDaysStartIdx + 1;
//             lastAppleDaysStartIdx = null;
//             lastAppleDaysEndIdx = null;
//             continue;
//         }

//         if (currAppleDaysEndIdx < lastAppleDaysStartIdx) {
//             count += lastAppleDaysEndIdx - lastAppleDaysStartIdx + 1;
//             lastAppleDaysStartIdx = currAppleDaysStartIdx;
//             lastAppleDaysEndIdx = currAppleDaysEndIdx;
//             continue;
//         }

//         if (currAppleDaysEndIdx >= lastAppleDaysEndIdx || currAppleDaysEndIdx >= lastAppleDaysStartIdx) {
//             count += currAppleDaysEndIdx - lastAppleDaysStartIdx + 1;
//             lastAppleDaysEndIdx = lastAppleDaysStartIdx;
//             lastAppleDaysStartIdx = currAppleDaysStartIdx;
//             continue;
//         }
//     }

//     count += lastAppleDaysEndIdx - lastAppleDaysStartIdx;
    
//     return count;
// };

// var eatenApples = function(apples, days) {
//     let count = 0;
    
//     const heatMap = generateHeatMap(apples, days);
//     const ratings = generateRatings(apples, days).sort((a, b) => a.rating - b.rating);

//     for (let rating of ratings) {
//         while(rating.availableApples > 0) {
//             const minHeatIdx = getMinHeatIdxInRange(heatMap, rating.startIdx, rating.endIdx);
//             heatMap[minHeatIdx]--;
//             rating.availableApples--;
//             count++;
//         }
//     }

//     return count;
// };

// const getMinHeatIdxInRange = (heatMap, startIdx, endIdx) => {
//     let [minHeat, minHeatIdx] = [Number.MAX_VALUE, -1];
//     for (let idx = startIdx; idx <= endIdx; idx++) {
//         if (heatMap[idx] < minHeat) {
//             minHeat = heatMap[idx];
//             minHeatIdx = idx;
//         }
//     }

//     return minHeatIdx;
// }

// const generateHeatMap = (apples, days) => {
//     const heatMap = [];
//     for (let idx = 0; idx < apples.length; idx++) {
//         for (let dayOffset = 0; dayOffset < days[idx]; dayOffset++) {
//             heatMap[idx + dayOffset] = (heatMap[idx + dayOffset] || 0) + 1;
//         }
//     }

//     return heatMap;
// }

// const generateRatings = (apples, days) => {
//     const ratings = [];
//     for (let idx = 0; idx < apples.length; idx++) {
//         ratings[idx] = {
//             rating: Math.max(days[idx] - apples[idx], 0),
//             availableApples: Math.min(days[idx], apples[idx]),
//             startIdx: idx,
//             endIdx: idx + days[idx] - 1
//         };
//     }

//     return ratings;
// }

// function eatenApples11(apples, days) {
//     let n = apples.length;
//     let events = [];
//     for (let i = 0; i < n; i++) {
//       if (apples[i] > 0) {
//         events.push([days[i], apples[i]]);
//       }
//     }
//     events.sort((a, b) => a[0] - b[0]);
  
//     let maxApples = 0;
//     let priorityQueue = [];
//     for (let i = 0, j = 0; i < n; i++) {
//       while (j < events.length && events[j][0] <= i) {
//         priorityQueue.push(events[j][1]);
//         j++;
//       }
//       if (priorityQueue.length > 0) {
//         maxApples++;
//         priorityQueue.sort((a, b) => b - a);
//         priorityQueue[0]--;
//         if (priorityQueue[0] === 0) {
//           priorityQueue.shift();
//         }
//       }
//     }
//     const result = maxApples + priorityQueue.reduce((sum, cur) => sum + cur, 0);
//     console.log(result);
//     return result;
//   }

//   function eatenApples333(apples, days) {
//     let n = apples.length;
//     let events = [];
//     for (let i = 0; i < n; i++) {
//       if (apples[i] > 0) {
//         events.push([i + days[i], apples[i]]);
//       }
//     }
//     events.sort((a, b) => a[0] - b[0]);
  
//     let maxApples = 0;
//     let priorityQueue = [];
//     for (let i = 0, j = 0; i < n; i++) {
//       while (j < events.length && events[j][0] === i) {
//         priorityQueue.push(events[j][1]);
//         j++;
//       }
//       if (priorityQueue.length > 0) {
//         priorityQueue.sort((a, b) => b - a);
//         let eaten = Math.min(priorityQueue[0], priorityQueue.length);
//         maxApples += eaten;
//         priorityQueue[0] -= eaten;
//         if (priorityQueue[0] === 0) {
//           priorityQueue.shift();
//         }
//       }
//     }
//     return maxApples;
//   }

//   function eatenApples(apples, days) {
//     let n = apples.length;
//     let events = [];
//     for (let i = 0; i < n; i++) {
//       if (apples[i] > 0) {
//         events.push([i + days[i], apples[i]]);
//       }
//     }
//     events.sort((a, b) => a[0] - b[0]);
  
//     let maxApples = 0;
//     let priorityQueue = [];
//     for (let i = 0, j = 0; i < events[events.length - 1][0]; i++) {
//       while (j < events.length && events[j][0] === i) {
//         priorityQueue.push(events[j][1]);
//         j++;
//       }
//       if (priorityQueue.length > 0) {
//         priorityQueue.sort((a, b) => b - a);
//         let eaten = Math.min(priorityQueue[0], priorityQueue.length);
//         maxApples += eaten;
//         priorityQueue[0] -= eaten;
//         if (priorityQueue[0] === 0) {
//           priorityQueue.shift();
//         }
//       }
//     }
//     return maxApples;
//   }

var eatenApples = function(apples=[], days=[]) {
    let count = 0;

    const applesData = apples.map((apple, idx) => ({
        availableApples: Math.min(days[idx], apple),
        startIdx: idx,
        endIdx: idx + days[idx] - 1
    })).filter(a => a.availableApples > 0)

    applesData.sort((a,b) => b.endIdx - a.endIdx);

    let lastDayIdx = applesData[0].endIdx;
    while (lastDayIdx >= 0) {
        let maxFirstDayIdxData = null;
        for(let idx = 0; idx < applesData.length; idx++) {
            if (!applesData[idx] || !applesData[idx].availableApples) continue;
            if (applesData[idx].endIdx < lastDayIdx) break;
            applesData[idx].endIdx--;

            if (!maxFirstDayIdxData || applesData[idx].startIdx > maxFirstDayIdxData.startIdx) {
                maxFirstDayIdxData = applesData[idx];
            }

            if (applesData[idx].startIdx > applesData[idx].endIdx || !applesData[idx].availableApples) applesData[idx] = null
        }

        if (!maxFirstDayIdxData) break;

        maxFirstDayIdxData.availableApples--;
        count++;

        const applesDataWithMaxEndIdx = applesData.find(a => a && a.availableApples && a.endIdx >= 0);
        if (!applesDataWithMaxEndIdx) break;

        lastDayIdx = applesDataWithMaxEndIdx.endIdx;
    }


    return count;
};


// var eatenApples = function(A, D) {
//     let time = new Array(40001), ans = 0, last = A.length
//     for (let i = 0, j = Infinity; i <= last; i++) {
//         if (j < i) j = i
//         if (A[i]) {
//             let exp = i + D[i] - 1
//             if (time[exp]) time[exp] += A[i]
//             else time[exp] = A[i]
//             if (exp < j) j = exp
//             if (exp > last) last = exp
//         }
//         while (!time[j] && j < last) j++
//         if (time[j]) ans++, time[j]--
//     }
//     return ans
// };



// eatenApples([1,2,3,5,2], [3,2,1,4,2]);
// eatenApples([3,0,0,0,0,2], [3,0,0,0,0,2]); // 5
// eatenApples([3,1,1,0,0,2], [3,1,1,0,0,2]);
// eatenApples([2,1,10], [2,10,1]);
// eatenApples([1,2,3,5,2], [3,2,1,4,2]); // 7
// eatenApples([1], [2]); // 1
eatenApples([2,1,10], [2,10,1]); // 4

//       |-----|   
// |--------------|

//             |-----|
// |--------------|   

//             |-----|
// |--------|         



// 1 |-----------------------|
// 3    |--|
// 1        |--------|
// 5           |------|
// 4              |--|
// 3                 |----|
//

//   11122222223334443222221111