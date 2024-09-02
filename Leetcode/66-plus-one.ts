function plusOne(digits: number[]): number[] {
	   const length = digits.length;

    for (let index = length - 1; index >= 0; index -= 1) {
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

    return [1, ...digits];
};

console.log('plusOne', plusOne([1,2,3]));
console.log('-------');
console.log('plusOne', plusOne([9]));