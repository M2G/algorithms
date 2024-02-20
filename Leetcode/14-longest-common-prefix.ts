function longestCommonPrefix(strs: string[]): string {
      if (!strs) return "";
        for (let i = 0; i < strs[0].length ; i += 1){
            const c = strs[0][i];
            for (let j = 1; j < strs.length; j += 1) {
                if (i == strs[j].length || strs[j][i] !== c)
                    return strs[0].substring(0, i);             
            }
        }
        return strs[0];
};