// url: https://leetcode.com/problems/merge-k-sorted-lists/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists = []) {
    let currMinNode = null;
    let nextMinNode = null;
    for (let idx = 0; idx < lists.length; idx++) {
        if (!lists[idx]) continue;

        if (!currMinNode) {
            currMinNode = lists[idx];
        } else if (lists[idx].val < currMinNode.val) {
            currMinNode = lists[idx];
        }
    }

    const resultRoot = currMinNode;

    while (currMinNode !== nextMinNode) {
        for (let idx = 0; idx < lists.length; idx++) {
            if (!lists[idx]) continue;

            if (currMinNode === lists[idx]) {
                lists[idx] = lists[idx].next;
            } else if (lists[idx].val === currMinNode.val) {
                currMinNode.next = lists[idx];
                currMinNode = currMinNode.next;
                lists[idx] = lists[idx].next;
            }

            if (!lists[idx]) continue;
            
            if (!nextMinNode || lists[idx].val < nextMinNode.val) {
                nextMinNode = lists[idx];
            }
        }

        currMinNode.next = nextMinNode;
        currMinNode = currMinNode.next;
        nextMinNode = null;
    }

    return resultRoot;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(3, new ListNode(4))));
const list3 = new ListNode(2, new ListNode(6));

mergeKLists([list1, list2, list3]);

// const list4 = new ListNode(2);
// const list5 = new ListNode(-1);

// mergeKLists([list4, null, list5]);
