// url: https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal1 = function(root) {
    const values = [];
    const stack = [];
    
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop();
        values.push(curr.val);
        curr = curr.right;
    }
    
    return values;
};

var inorderTraversal2 = function(root) {
    const nodes = [];
    traverse(root, nodes);
    
    return nodes;
};

const traverse = (node, nodes) => {
    if (!node) return;
    
    traverse(node.left, nodes);
    nodes.push(node.val);
    traverse(node.right, nodes);
}