// url: https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    let [fast, slow] = [head, head];
    while (fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};