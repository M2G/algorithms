function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var hashMap = {};
    // first term
    for (var i = 0; i < s.length; i += 1) {
        if (hashMap[s[i]]) {
            hashMap[s[i]] += 1;
            console.log('1', hashMap[s[i]]);
            console.log('----------');
        }
        else {
            hashMap[s[i]] = 1;
            console.log('2', hashMap[s[i]]);
            console.log('----------');
        }
    }
    // second term
    for (var j = 0; j < t.length; j += 1) {
        if (!hashMap[t[j]]) {
            console.log('3', hashMap[s[j]]);
            console.log('xxxxxxxxxx');
            return false;
        }
        hashMap[s[j]] -= 1;
        console.log('4', hashMap[s[j]]);
        console.log(':::::::::::');
    }
    return true;
}
;
isAnagram("anagram", "nagaram");
