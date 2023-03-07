// url: https://leetcode.com/problems/intersection-of-two-linked-lists/

var getIntersectionNode = function(headA, headB) {
    let [a, b] = [headA, headB];
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a;
};