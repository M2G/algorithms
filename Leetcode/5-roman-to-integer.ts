  function value(r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }

 function romanToInt(str: string): number {
      // Initialize result
        let res = 0;
 
        for (let i = 0; i < str.length; i += 1)
        {
         
            // Getting value of symbol s[i]
            const s1 = value(str[i]);

              console.log('s1', s1)

            if (i + 1 < str.length) {

                 const s2 = value(str[i] + 1);
                  console.log('length s1', s1)
                  console.log('length s2', s2)

            }
        }




};

console.log('romanToInt', romanToInt("III"))
//console.log('romanToInt', romanToInt("LVIII"))
//console.log('romanToInt', romanToInt("MCMXCIV"))