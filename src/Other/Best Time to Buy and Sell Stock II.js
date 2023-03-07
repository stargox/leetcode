// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let result = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
        const diff = prices[i + 1] - prices[i];
        if (diff > 0) {
            result += diff
        }
    }
    
    return result;
};