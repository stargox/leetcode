// url: https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const list = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));

var reverseList = function(head) {
    let [prev, curr, next] = [null, head, null];

    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
};

reverseList(list);