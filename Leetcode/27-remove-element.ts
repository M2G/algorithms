function removeElement(nums, val) {
	if (val && nums.length === 0) return 0;

	let k = 0;
    for (let i = 0; i < nums.length; i += 1) {
    	// if doesnt match with number/val
        if (nums[i] !== val){
        	// we do an affectation
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

console.log('[3,2,2,3]', removeElement([3,2,2,3], 3));
console.log('[0,1,2,2,3,0,4,2]', removeElement([0,1,2,2,3,0,4,2], 2));