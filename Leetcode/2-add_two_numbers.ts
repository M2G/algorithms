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
	let sum = 0;
	const headNode = new ListNode(0);
	let currNode = headNode;
	let a = l1;
	let b = l2;
	while(a || b || carry) {
	  sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
	  carry = Math.floor(sum / 10);
	  const digit = sum % 10;

	  currNode.next = new ListNode(digit);
	  currNode = currNode.next;
	  a = a ? a.next : null;
	  b = b ? b.next : null;
	}

	if (carry) {
	  currNode.next = new ListNode(carry);
	}

	 return headNode.next;
};