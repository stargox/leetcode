// url: https://leetcode.com/problems/convert-bst-to-greater-tree/

const cn = (val = null, left = null, right = null) => ({ val, left, right });

var convertBST = function(root) {
    let sum = 0;

    const convert = (node) => {
        if (!node) return;

        convert(node.right);
        node.val += sum;
        sum = node.val;
        convert(node.left);
    };

    convert(root);
    return root;
};

const tree = cn(4, cn(1, cn(0), cn(2, null, cn(3))), cn(6, cn(5), cn(7, null, cn(8))));

convertBST(tree);
