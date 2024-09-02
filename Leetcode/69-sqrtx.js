function mySqrt(num) {
    var left = 0;
    var right = num;
    while (left < right) {
        console.log('left < right', left < right);
        var mid = (left + right + 1) >>> 1;
        console.log('mid', mid);
        console.log('num', num);
        console.log('mid <= num / mid', mid <= num / mid);
        if (mid <= num / mid) {
            left = mid; // If mid squared is within bounds, shift the left pointer to mid
        }
        else {
            right = mid - 1;
        }
    }
    // When left meets right, we've found the integer part of the square root
    return left;
}
;
mySqrt(4);
