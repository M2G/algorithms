function lengthOfLongestSubstring(s: string): number {

let maxLength: number = 0;

for (let i = 0; i < s.length; i += 1) {
	// code...
	for (let j = i; j < s.length; j += 1) {
		// code...
			if (checkUniqueSubString(s, i, j)) {
				maxLength = Math.max(maxLength, j - i + 1)
			}
		}
	}
	return maxLength;
};

function checkUniqueSubString(str: string, i: number, j: number) {

const isVisited = {};

	for (let k = i; k <= j; k += 1) {
	// code...
		if (isVisited[str[k]]){
			return false;
		}
		isVisited[str[k]] = true;
	}

	console.log('isVisited', isVisited)

	return true;
}


console.log('abcabcbb', lengthOfLongestSubstring("abcabcbb"))
console.log('bbbbb', lengthOfLongestSubstring("bbbbb"))
console.log('pwwkew', lengthOfLongestSubstring("pwwkew"))
