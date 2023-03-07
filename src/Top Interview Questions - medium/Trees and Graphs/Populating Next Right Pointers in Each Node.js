// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/789/

function Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root || !root.left) return root;

    let [prevNode, node] = [null, root];
    while (node) {
        if (prevNode) {
            prevNode.right.next = node.left
        }
        node.left.next = node.right;
        
        [prevNode, node] = [node, node.next];
    }

    connect(root.left);

    return root;
};

 const tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
 connect(tree);
