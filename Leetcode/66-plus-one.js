var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function plusOne(digits) {
    var length = digits.length;
    for (var index = length - 1; index >= 0; index -= 1) {
        digits[index] += 1;
        // 2
        // 3
        // 4
        // [1,2,3] -> [2,3,4]
        console.log('digits[index]', digits[index]);
        if (digits[index] < 10) {
            console.log('digits[index] < 10', digits[index]);
            return digits;
        }
        digits[index] = 0;
        console.log('digits[index] = 0', digits[index]);
    }
    console.log('digits', digits);
    return __spreadArray([1], digits, true);
}
;
console.log('plusOne', plusOne([1, 2, 3]));
console.log('-------');
console.log('plusOne', plusOne([9]));
