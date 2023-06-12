// url: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

function climbingLeaderboard(ranked=[0], player=[0]) {
    const playerRanks = new Array(player.length).fill(0);

    let playerIdx = player.length - 1;
    let rankIdx = 0;
    let currRank = 1;
    while (playerIdx >= 0) {
        if (rankIdx >= ranked.length || ranked[rankIdx] !== ranked[rankIdx - 1]) {
            if (rankIdx >= ranked.length || player[playerIdx] >= ranked[rankIdx]) {
                playerRanks[playerIdx] = currRank;
                playerIdx--;
                continue;
            }

            currRank++;
        }

        rankIdx++;
    }

    return playerRanks;
}

// climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
climbingLeaderboard([100, 90, 90, 80], [70, 80, 81, 82, 101]);
