import {checkByte} from "./checkByte";


describe('Check Byte', () => {
    it('Test', () => {
        expect(checkByte("0")).toBe(false);
        expect(checkByte("00")).toBe(false);
        expect(checkByte("000")).toBe(false);
        expect(checkByte("0000")).toBe(false);
        expect(checkByte("00000")).toBe(false);
        expect(checkByte("000000")).toBe(false);
        expect(checkByte("0000000")).toBe(false);
        expect(checkByte("00000000")).toBe(true);
        expect(checkByte("1")).toBe(false);
        expect(checkByte("11")).toBe(false);
        expect(checkByte("111")).toBe(false);
        expect(checkByte("1111")).toBe(false);
        expect(checkByte("11111")).toBe(false);
        expect(checkByte("111111")).toBe(false);
        expect(checkByte("1111111")).toBe(false);
        expect(checkByte("11111111")).toBe(true);
        expect(checkByte("1010101")).toBe(false);
        expect(checkByte("10101010")).toBe(true);
        expect(checkByte("0101010")).toBe(false);
        expect(checkByte("01010101")).toBe(true);
        expect(checkByte("010101010")).toBe(false);
        expect(checkByte("101010101")).toBe(false);
    });
});