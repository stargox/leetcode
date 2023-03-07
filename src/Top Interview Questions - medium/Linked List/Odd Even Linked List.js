// url: https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {
    if (!head) {
        return head;
    }

    let [odd, even, firstEven] = [head, head.next, head.next];
    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next

        odd = odd.next;
        even = even.next;
    }

    odd.next = firstEven;
    
    return head;
};