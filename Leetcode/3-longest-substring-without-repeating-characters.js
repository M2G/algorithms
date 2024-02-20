function lengthOfLongestSubstring(s) {
    var maxLength = 0;
    for (var i = 0; i < s.length; i += 1) {
        var isVisited = {};
        // code...
        for (var j = i; j < s.length; j += 1) {
            // code...
            if (isVisited[s[j]]) {
                break;
            }
            else {
                maxLength = Math.max(maxLength, j - i + 1);
                isVisited[s[j]] = true;
            }
        }
        isVisited[s[i]] = false;
    }
    return maxLength;
}
;
console.log('abcabcbb', lengthOfLongestSubstring("abcabcbb"));
console.log('bbbbb', lengthOfLongestSubstring("bbbbb"));
console.log('pwwkew', lengthOfLongestSubstring("pwwkew"));
