// url: https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let head = createNode(0);
    let result = head;
    let carry = 0;

    while (l1 || l2 || carry) {
        const resVal = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        result.next = createNode(resVal % 10);
        carry = Math.floor(resVal / 10);
        l1 = l1?.next;
        l2 = l2?.next;
        result = result.next;
    }

    return head.next;
};

const createNode = (val, next = null) => ({ val, next });