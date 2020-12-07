import validParentheses from '../validParentheses';

describe('validParentheses test', () => {
    it('is valid', () => {
        expect(validParentheses("()")).toEqual(true);
    });
});

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("([)]"));
console.log(validParentheses("{[]}"));