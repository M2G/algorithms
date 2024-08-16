function lengthOfLastWord(s: string): number {
     let i = s.length - 1;

    while (i >= 0 && s[i] ===' ')
      --i;
  		console.log('--------', i)
    const lastIndex = i;
    while (i >= 0 && s[i] !== ' ')
      --i;
  		console.log(':::::::', i)


  	console.log('lastIndex - i', lastIndex - i)
    return lastIndex - i;
};


lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");