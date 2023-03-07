// url: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/

var minTime = function(n=0, edges=[[]], hasApple=[]) {
    const nodesByParentNode = {}
    for (let edge of edges) {
        if (nodesByParentNode[edge[0]]) nodesByParentNode[edge[0]].push(edge[1]);
        else nodesByParentNode[edge[0]] = [edge[1]];
    }

    for (let edge of edges) {
        if (nodesByParentNode[edge[1]]) nodesByParentNode[edge[1]].push(edge[0]);
        else nodesByParentNode[edge[1]] = [edge[0]];
    }

    const visited = {}

    const result = dfs(0, nodesByParentNode, hasApple, visited);
    return result;
};

const dfs = (node, nodesByParentNode = {}, hasApple=[], visited = {}) => {
    visited[node] = true;
    let time = 0;

    for (let childNode of (nodesByParentNode[node] || [])) {
        if (visited[childNode]) continue;

        time += dfs(childNode, nodesByParentNode, hasApple, visited);
    }

    const isRootNode = !node;
    const isLeafAppleNode = hasApple[node] && !time;

    if (isRootNode && isLeafAppleNode) return 0;
    if (isLeafAppleNode) return 2
    if (isRootNode) return time;

    return time ? time + 2 : 0
}

// const dfs1 = (node, edges=[[]], hasApple=[], offset = 0) => {
//     let time = 0;

//     for(let idx = offset; idx < edges.length; idx++) {
//         if (edges[idx][0] === node) {
//             time += dfs(edges[idx][1], edges, hasApple, idx + 1);
//         } else if (edges[idx][1] === node) {
//             time += dfs(edges[idx][0], edges, hasApple, idx + 1);
//         }
//     }

//     const isRootNode = !node;
//     const isLeafAppleNode = hasApple[node] && !time;

//     if (isRootNode && isLeafAppleNode) return 0;
//     if (isLeafAppleNode) return 2
//     if (isRootNode) return time;

//     return time ? time + 2 : 0
// }

// minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false]);
// minTime(3, [[0,1],[0,2]], [false,true,false]);
// minTime(4, [[0,1],[1,2],[0,3]], [true,true,true,true]);
minTime(4, [[0,2],[0,3],[1,2]], [false,true,false,false]);
// minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [true,false,false,false,false,false,false]);