function lengthOfLongestSubstring(s: string): number {

let maxLength: number = 0;

for (let i = 0; i < s.length; i += 1) {
	const isVisited = {};
	// code...
	for (let j = i; j < s.length; j += 1) {
		// code...
			if (isVisited[s[j]]) {
				break;
			} else {
				maxLength = Math.max(maxLength, j - i + 1);
				isVisited[s[j]] = true;
			}
		}
		isVisited[s[i]] = false;
	}
	return maxLength;
};



console.log('abcabcbb', lengthOfLongestSubstring("abcabcbb"))
console.log('bbbbb', lengthOfLongestSubstring("bbbbb"))
console.log('pwwkew', lengthOfLongestSubstring("pwwkew"))
