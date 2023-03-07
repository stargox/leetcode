// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let buyPrice = Number.MAX_VALUE;
    let profit = 0;

    for (let price of prices) {
        if (price < buyPrice) buyPrice = price;
        const sellProfit = price - buyPrice;
        if (sellProfit > profit) profit = sellProfit;
    }

    return profit;
};
