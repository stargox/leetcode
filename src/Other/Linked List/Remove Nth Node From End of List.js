// url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    const reversedHead = reverseList(head);
    const reversedUpdatedHead = removeNthNode(reversedHead, n);
    const updatedHead = reverseList(reversedUpdatedHead);

    return updatedHead;
};

const reverseList = node => {
    let [prev, curr, next] = [null, node, null];

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const removeNthNode = (head, n) => {
    if (n == 1) {
        return head.next;
    }

    let node = head;
    for (let i = 1; i < n; i++) {
        if (i === n - 1) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    return head;
}

const root = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))));
// removeNthFromEnd(root, 6);


// var removeNthFromEnd = function(head, n) {
//     if (head == null || head.next == null) {
//         return null;
//     }

//     let sentinel = new ListNode(0, head);
//     let fast = head;
//     let slow = sentinel;

//     for (let i = 0; i < n; i++) {
//         fast = fast.next;
//     }

//     while (fast != null) {
//         fast = fast.next;
//         slow = slow.next;
//     }

//     slow.next = slow.next.next;
//     return sentinel.next;
// };

// removeNthFromEnd(root, 1)