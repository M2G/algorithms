var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    var dummy = new ListNode(-Infinity);
    console.log('ok');
    var prev = dummy;
    var current1 = list1;
    var current2 = list2;
    while (current1 && current2) {
        if (current1.val <= current2.val) {
            prev.next = current1;
            prev = current1;
            current1 = current1.next;
            console.log('current1 IF', current1);
            console.log('current2 IF', current2);
        }
        else {
            console.log('current1 ELSE', current1);
            console.log('current2 ELSE', current2);
        }
        return true;
    }
}
;
var list1 = new ListNode([1, 2, 4]);
var list2 = new ListNode([1, 3, 4]);
mergeTwoLists(list1, list2);
