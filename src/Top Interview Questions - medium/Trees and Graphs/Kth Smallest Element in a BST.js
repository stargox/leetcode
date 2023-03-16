// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/790/

const createNode = (val = null, left = null, right = null) => ({ val, left, right });

// var kthSmallest = function(root, k) {
//     let nodeNumber = 0;

//     const traverse = (node) => {
//         if (node.left) {
//             const result = traverse(node.left)
//             if (result !== null) return result;
//         };
//         nodeNumber++;

//         if (nodeNumber === k) return node.val;

//         if (node.right) {
//             const result = traverse(node.right)
//             if (result !== null) return result;
//         };

//         return nodeNumber === k ? node.val : null;
//     }

//     return traverse(root);
// };

var kthSmallest = function(root, k) {
    const values = [];

    const traverse = (node) => {
        if (!node) return null;

        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
    }

    traverse(root);

    return values[k - 1];
};

const tree = createNode(5, createNode(3, createNode(2, createNode(1)), createNode(4)), createNode(6));
const tree1 = createNode(3, createNode(1, null, createNode(2)), createNode(4));

kthSmallest(tree1, 1);
