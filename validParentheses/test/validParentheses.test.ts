import validParentheses from '../validParentheses';

describe('validParentheses test', () => {
    it('is valid', () => {
        expect(validParentheses("()")).toEqual(true);
        expect(validParentheses("()[]{}")).toEqual(true);
        expect(validParentheses("(]")).toEqual(false);
        expect(validParentheses("([)]")).toEqual(false);
        expect(validParentheses("{[]}")).toEqual(true);
    });
});