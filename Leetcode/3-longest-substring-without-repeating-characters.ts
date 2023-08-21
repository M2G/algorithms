function lengthOfLongestSubstring(s: string): number {

let maxLength: number = 0;

for (var i = 0; i < s.length; i = i + 1) {
	// code...
	for (var j = 0; j < s.length; j = j + 1) {
		// code...
		if (checkUniqueSubString(s, i, j)) {
			maxLength= Math.max(maxLength, j - i + 1)
		}
	}
	return maxLength;
}




	return 0;
};

function checkUniqueSubString(str: string, i: number, j: number) {

const isVisited = {};

	for (var k = i; k <= j; k = k + 1) {
	// code...
		if (isVisited[str[k]]){
			return false;
		}
		isVisited[str[k]] = true;
	}

	console.log('isVisited', isVisited)

	return true;
}


	console.log('RESULT', lengthOfLongestSubstring("abcabcbb"))
