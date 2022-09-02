import {checkYear} from "./checkYear";


describe('Validate Year', () => {
    it('Test', () => {
        expect(checkYear('-1')).toBe(false);
        expect(checkYear('0')).toBe(true);
        expect(checkYear('-000')).toBe(true);
        expect(checkYear('-001')).toBe(false);
        expect(checkYear('0000')).toBe(true);
        expect(checkYear('1')).toBe(true);
        expect(checkYear('01')).toBe(true);
        expect(checkYear('001')).toBe(true);
        expect(checkYear('0001')).toBe(true);
        expect(checkYear('010')).toBe(true);
        expect(checkYear('10')).toBe(true);
        expect(checkYear('100')).toBe(true);
        expect(checkYear('099')).toBe(true);
        expect(checkYear('1000')).toBe(true);
        expect(checkYear('1999')).toBe(true);
        expect(checkYear('2000')).toBe(true);
        expect(checkYear('3000')).toBe(true);
        expect(checkYear('4999')).toBe(true);
        expect(checkYear('5000')).toBe(true);
        expect(checkYear('10000')).toBe(true);
    });
});