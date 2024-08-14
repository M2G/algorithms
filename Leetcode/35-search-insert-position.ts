function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length;
    // condition
    while (start < end) {
        // get half 
        const middle = Math.floor((start + end) / 2);

        // not equal target, is not higher than target so increment
        if (nums[middle] >= target) {
            end = middle;
            // no matching condition
        } else {
            start = middle + 1;
        }
    }
    return start;

};