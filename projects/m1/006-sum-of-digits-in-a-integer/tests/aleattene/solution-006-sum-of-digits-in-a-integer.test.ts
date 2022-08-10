
import {sumIntegerDigits} from '../../solutions/aleattene/solution-006-sum-of-digits-in-a-integer';


describe('Sum Digits Number', () => {
    it('Test', () => {
        expect(sumIntegerDigits("1")).toBe(1);
        expect(sumIntegerDigits("10")).toBe(1);
        expect(sumIntegerDigits("101")).toBe(2);
        expect(sumIntegerDigits("123")).toBe(6);
        expect(sumIntegerDigits("10203090")).toBe(15);
        expect(sumIntegerDigits("1111111111")).toBe(10);
        expect(sumIntegerDigits("12345678910")).toBe(46);
        expect(sumIntegerDigits("10987654321")).toBe(46);
    });
});