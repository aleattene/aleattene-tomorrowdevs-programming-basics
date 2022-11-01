import {isPalindrome} from "../../solutions/aleattene/solution-026-is-a-string-a-palindrome";

describe('Function Is Palindrome', () => {
    it('Test', () => {
        expect(isPalindrome('a')).toBe(true);
        expect(isPalindrome('aA')).toBe(true);
        expect(isPalindrome('AaA')).toBe(true);
        expect(isPalindrome('AaAa')).toBe(true);
        expect(isPalindrome('AbcbA')).toBe(true);
        expect(isPalindrome('Abc')).toBe(false);
        expect(isPalindrome('1A1')).toBe(true);
        expect(isPalindrome('123123')).toBe(false);
        expect(isPalindrome('123 321')).toBe(true);
    });
});