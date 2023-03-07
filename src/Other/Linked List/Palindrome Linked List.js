// url: https://leetcode.com/problems/palindrome-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const list = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));

var isPalindrome = function(head) {
    if (!head.next) {
      return true;
    }

    let [fast, slow] = [head, head];
    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let reversed = reverse(slow);
    let direct = head;
    while (reversed) {
      if (reversed.val !== direct.val) {
        return false;
      }
      reversed = reversed.next;
      direct = direct.next;
    }

    return true;
};

const reverse = node => {
  let [previous, current] = [null, node];
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

isPalindrome(list);
