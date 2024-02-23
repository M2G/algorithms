function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var hashTable = {};
    // first term
    for (var i = 0; i < s.length; i += 1) {
        if (!hashTable[s[i]]) {
            hashTable[s[i]] = 0;
            console.log('1', hashTable[s[i]]);
            console.log('---------');
        }
        hashTable[s[i]] += 1;
        console.log('2', hashTable[s[i]]);
    }
    // second term
    for (var j = 0; j < t.length; j += 1) {
        if (!hashTable[t[j]]) {
            return false;
        }
        console.log(':::::::::', hashTable[t[j]]);
    }
    return false;
}
;
isAnagram("anagram", "nagaram");
