
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
     }
  }
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	const dummy = new ListNode(-Infinity);
    console.log('ok')
    let prev = dummy;
    let current1 = list1;
    let current2 = list2;

     while (current1 && current2) {

     	  if (current1.val <= current2.val) {

	 console.log('current1 IF', current1)
	  console.log('current2 IF', current2)

	     } else {
	 console.log('current1 ELSE', current1)
	  console.log('current2 ELSE', current2)

 		} 
	  	return true;
    } 	
};


const list1 = new ListNode([1,2,4]);
const list2 = new ListNode([1,3,4]);

mergeTwoLists(list1, list2);