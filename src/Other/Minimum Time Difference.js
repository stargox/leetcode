var findMinDifference = function(timePoints=['00:00']) {
    const timePointsInMinutes = timePoints
        .map(t => Number.parseInt(t.substring(0,2)) * 60 + Number.parseInt(t.substring(3,5)))
        .sort((a, b) => a - b);

    let minDifference = 24 * 60;
    for(let idx = 0; idx < timePointsInMinutes.length; idx++) {
        const prevTime = idx === 0
            ? timePointsInMinutes[timePointsInMinutes.length - 1] - 24 * 60
            : timePointsInMinutes[idx - 1];
        const currTime = timePointsInMinutes[idx];
        const difference = currTime - prevTime;

        if (difference < minDifference) {
            minDifference = difference;
        }
    }

    return minDifference;
};


// findMinDifference(['00:00','23:54','23:56','23:57']);

findMinDifference(['23:54','23:56','23:57']);