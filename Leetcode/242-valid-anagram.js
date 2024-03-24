function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var obj1 = {};
    var obj2 = {};
    for (var i = 0; i < s.length; i += 1) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        console.log('obj1', obj1);
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        console.log('obj2', obj2);
    }
    for (var key in obj1) {
        console.log('---------', obj1);
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
isAnagram("anagram", "nagaram");
