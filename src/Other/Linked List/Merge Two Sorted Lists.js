// url: https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let mergedNode = null;

    while (node1 || node2) {
        if (node1 && node2) {
            if (node1.val < node2.val) {
                mergedNode = {
                    next: mergedNode,
                    val: node1.val
                };
                node1 = node1.next;
            } else {
                mergedNode = {
                    next: mergedNode,
                    val: node2.val
                };
                node2 = node2.next;
            }

        } else if (node1) {
            mergedNode = {
                next: mergedNode,
                val: node1.val
            };
            node1 = node1.next;
        } else {
            mergedNode = {
                next: mergedNode,
                val: node2.val
            };
            node2 = node2.next;
        }
    }

    return reverseList(mergedNode);
};

var reverseList = function(head) {
    let previous = null;
    let node = head;
    while (node) {
        const nextNode = node.next;
        node.next = previous;
        previous = node;
        node = nextNode;
    }
    return previous;
};