const mostAccessedResource = (resources = [[]], interval = 300) => {
    let [marName, marCount] = [null, 0, 0];
    const map = new Map();

    let [leftIdx, rightIdx] = [0, 0];
    while (rightIdx < resources.length) {
        const [leftTime, rightTime] = [getTime(resources[leftIdx]), getTime(resources[rightIdx])];
        const [leftName, rightName] = [getName(resources[leftIdx]), getName(resources[rightIdx])];

        if (rightTime - leftTime <= interval) {
            const accessCount = (map.get(rightName) || 0) + 1;
            if (accessCount > marCount) {
                marCount = accessCount;
                marName = rightName;
            }

            map.set(rightName, accessCount);
            rightIdx++;
        } else {
            map.set(leftName, map.get(leftName) - 1);
            leftIdx++;
        }
    }

    return marName;
}

const getTime = resource => +resource[0];
const getName = resource => resource[2];


mostAccessedResource([
    ['300', 'user1', 'resource1'],
    ['400', 'user2', 'resource2'],
    ['500', 'user3', 'resource1'],
    ['2000', 'user4', 'resource1'],
    ['2100', 'user3', 'resource2'],
    ['3000', 'user2', 'resource2'],
    ['3500', 'user1', 'resource2'],
]);