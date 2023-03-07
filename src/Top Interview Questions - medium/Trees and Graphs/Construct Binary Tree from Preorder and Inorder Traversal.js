// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/

const createNode = (val = null, left = null, right = null) => ({ val, left, right });

var buildTree = function(preorder=[0], inorder=[0]) {
    let preorderIdx = 0;
    const inorderIndexesByValue = {};
    for(let idx = 0; idx <= inorder.length; idx++) {
        inorderIndexesByValue[inorder[idx]] = idx;
    }

    const traverse = (inorderFromIdx, inorderToIdx) => {
        if (inorderFromIdx > inorderToIdx) return null;

        const node = createNode(preorder[preorderIdx]);
        const inorderIdx = inorderIndexesByValue[preorder[preorderIdx]];
        preorderIdx++;

        node.left = traverse(inorderFromIdx, inorderIdx - 1);
        node.right = traverse(inorderIdx + 1, inorderToIdx);

        return node;
    }

    return traverse(0, inorder.length - 1);
};

buildTree([3,9,20,15,7], [9,3,15,20,7]);
