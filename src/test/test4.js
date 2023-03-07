function merge(...arrays) {
    let elementsSet = new Set();
    for(const array of arrays) {
        for (const element of array) {
            elementsSet.add(element);
        }
    }
    const res = Array.from(elementsSet);
    const mergedResult = Array.from(elementsSet).sort((a, b) => {
        return a.alocalCompare(b);
    });

    return mergedResult;
}

merge([ 'alpha', 'charlie', 'delta' ], [ 'bravo', 'delta' ], [], [])