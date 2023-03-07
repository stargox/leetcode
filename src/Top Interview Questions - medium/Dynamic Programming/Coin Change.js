// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/

var coinChange = function(coins = [1,2,5], amount = 11) {
    const coinsCountByAmount = Array(amount + 1).fill(null);
    coinsCountByAmount[0] = 0;

    for (let currAmount = 1; currAmount <= amount; currAmount++) {
        for (let coin of coins) {
            if (currAmount < coin) continue;

            const coinsCountForAmountWithoutCoin = coinsCountByAmount[currAmount - coin];
            if (coinsCountForAmountWithoutCoin === null) continue;

            if (coinsCountByAmount[currAmount] === null) coinsCountByAmount[currAmount] = coinsCountForAmountWithoutCoin + 1;

            coinsCountByAmount[currAmount] = Math.min(coinsCountByAmount[currAmount], coinsCountForAmountWithoutCoin + 1);
        }
    }

    return coinsCountByAmount[amount] ?? -1;
};

coinChange();