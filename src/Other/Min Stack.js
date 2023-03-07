// url: https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.buffer = [];
    this.getLast = () => this.buffer[this.buffer.length - 1];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const last = this.getLast();
    const min = last && last.min < val ? last.min : val;
    this.buffer.push({ val, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.buffer.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.getLast()?.val ?? null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.getLast()?.min ?? null;
};