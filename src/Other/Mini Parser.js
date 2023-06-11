// url: https://leetcode.com/problems/mini-parser/

class NestedInteger {
    nestedList = null;
    singleInteger = null;

    isInteger() {
        return !nestedList;
    };

    getInteger() {
        return this.nestedList ? null : this.singleInteger;
    };

    setInteger(value) {
        this.singleInteger = value;
    };

    add(elem) {
        if (!this.nestedList) {
            this.nestedList = [];
        }

        this.nestedList.push(elem);
    };

    getList() {
        return nestedList;
    };
};

var deserialize = function(s='') {
    let offsetIndex = 0;

    const deserializeTokens = () => {
        const currInteger = new NestedInteger();

        if (s[offsetIndex] === ']') {
            return currInteger;
        }

        if (s[offsetIndex] === '[') {
            do {
                offsetIndex++; // bypass comma separator and open brace
                if (s[offsetIndex] !== ']') {
                    const childInteger = deserializeTokens()
                    currInteger.add(childInteger);
                }
            } while(s[offsetIndex] && s[offsetIndex] !== ']');
            offsetIndex++

            return currInteger;
        }

        let digit = '';
        while (s[offsetIndex] && (s[offsetIndex] >= '0' && s[offsetIndex] <= '9' || s[offsetIndex] === '-')) {
            digit += s[offsetIndex];
            offsetIndex++;
        }

        currInteger.setInteger(+digit)
        return currInteger;
    }

    return deserializeTokens();
};
 
//deserialize('[123,[456,[789]]]');
deserialize('[123,[788,833],[[]],10,[]]');