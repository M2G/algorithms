function strStr(haystack: string, needle: string): number {
    let m = haystack.length;
    let n = needle.length;

    for (let i = 0; i < m - n + 1; ++i)
      if (haystack.substring(i, i + n) === needle)
        return i;

    return -1;
};

console.log('[3,2,2,3]', strStr("sadbutsad", "sad");
console.log('[0,1,2,2,3,0,4,2]', strStr("leetcode", "leeto");