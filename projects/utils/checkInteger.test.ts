
import {checkPositiveInteger} from './checkInteger';

describe('Check Positive Number', () => {
    it('Test', () => {
        expect(checkPositiveInteger("")).toBe(false);
        expect(checkPositiveInteger("0")).toBe(false);
        expect(checkPositiveInteger("1")).toBe(true);
        expect(checkPositiveInteger("10")).toBe(true);
        expect(checkPositiveInteger("101")).toBe(true);
        expect(checkPositiveInteger("123")).toBe(true);
        expect(checkPositiveInteger("10203090")).toBe(true);
        expect(checkPositiveInteger("1111111111")).toBe(true);
        expect(checkPositiveInteger("12345678910")).toBe(true);
        expect(checkPositiveInteger("10987654321")).toBe(true);
        expect(checkPositiveInteger("-1.0")).toBe(false);
        expect(checkPositiveInteger("10,5")).toBe(false);
        expect(checkPositiveInteger("101")).toBe(true);
        expect(checkPositiveInteger("-1230")).toBe(false);
        expect(checkPositiveInteger("-10203090")).toBe(false);
        expect(checkPositiveInteger("-1111111111")).toBe(false);
        expect(checkPositiveInteger("-12345678910")).toBe(false);
        expect(checkPositiveInteger("-10987654321")).toBe(false);
        expect(checkPositiveInteger("1.0")).toBe(true);
        expect(checkPositiveInteger("1,0")).toBe(false);
        expect(checkPositiveInteger("10.1")).toBe(false);
        expect(checkPositiveInteger("123.0")).toBe(true);
        expect(checkPositiveInteger("-10203090.5")).toBe(false);
        expect(checkPositiveInteger("11111.11111")).toBe(false);
        expect(checkPositiveInteger("123456,78910")).toBe(false);
        expect(checkPositiveInteger("-10987654321.0")).toBe(false);
        expect(checkPositiveInteger("-1")).toBe(false);
        expect(checkPositiveInteger("-10")).toBe(false);
        expect(checkPositiveInteger("-101")).toBe(false);
        expect(checkPositiveInteger("-123")).toBe(false);
        expect(checkPositiveInteger("-10203090")).toBe(false);
        expect(checkPositiveInteger("-1111111111")).toBe(false);
        expect(checkPositiveInteger("-12345678910")).toBe(false);
        expect(checkPositiveInteger("-10987654321")).toBe(false);
    });
});