// url: https://leetcode.com/problems/boats-to-save-people/

var numRescueBoats = function(people, limit) {
    let [startIdx, endIdx] = [0, people.length - 1];
    let boatsCount = 0;
    people.sort((a, b) => a - b);

    while (startIdx <= endIdx) {
        boatsCount++;
        if (startIdx === endIdx) {
            break;
        }
        if (people[startIdx] + people[endIdx] <= limit) {
            startIdx++;
        }
        endIdx--;
    }

    return boatsCount;
};
