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

function romanToInt(s: string): number {
    let output = 0;
    for(let i = 0; i < s.length; i = i + 1){
          let curr = value(s[i]);
        
        if (i + 1 < s.length) {
            let next = value(s[i + 1]);
            if (curr >= next) {
                output = output + curr;
            } else {
                output = output + next - curr;
                i = i + 1
            }
        } else {
            output = output + curr;
        }
    }
    return output;
}