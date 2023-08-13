/*
1 <- 2 <- 3 (L1)
	 1 <- 2 (L2)
————————————————
1 	 3 	  5

     I
   1 2 7
+
      4 5
————————————
    1 7 2
*/


  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
let carry = 0;
let prevNode = new ListNode();
let headNode = prevNode;

while(l1 || l2 || carry) {
	let val1 = 0;
	let val2 = 0;

	if (l1) {
		val1 = l1.val;
		l1 = l1.next;
	}
	if (l2) {
		val2 = l2.val;
		l2 = l2.next;
	}

	const sum = val1 + val2 + carry;
	carry = Math.floor(sum / 10);
	const digit = sum % 10;

	const currNode = new ListNode(digit);
	prevNode.next = currNode;
	prevNode = currNode;
}

  return headNode.next;
};