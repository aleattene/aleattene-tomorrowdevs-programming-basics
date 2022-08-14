import {checkMonth} from "./checkMonth";


describe('Days in Month', () => {
    it('Test', () => {
        expect(checkMonth("january")).toBe(true);
        expect(checkMonth("february")).toBe(true);
        expect(checkMonth("march")).toBe(true);
        expect(checkMonth("april")).toBe(true);
        expect(checkMonth("may")).toBe(true);
        expect(checkMonth("june")).toBe(true);
        expect(checkMonth("july")).toBe(true);
        expect(checkMonth("august")).toBe(true);
        expect(checkMonth("september")).toBe(true);
        expect(checkMonth("october")).toBe(true);
        expect(checkMonth("november")).toBe(true);
        expect(checkMonth("december")).toBe(true);
        expect(checkMonth("january".toUpperCase())).toBe(true);
        expect(checkMonth("february".toUpperCase())).toBe(true);
        expect(checkMonth("march".toUpperCase())).toBe(true);
        expect(checkMonth("april".toUpperCase())).toBe(true);
        expect(checkMonth("may".toUpperCase())).toBe(true);
        expect(checkMonth("june".toUpperCase())).toBe(true);
        expect(checkMonth("july".toUpperCase())).toBe(true);
        expect(checkMonth("august".toUpperCase())).toBe(true);
        expect(checkMonth("september".toUpperCase())).toBe(true);
        expect(checkMonth("october".toUpperCase())).toBe(true);
        expect(checkMonth("november".toUpperCase())).toBe(true);
        expect(checkMonth("december".toUpperCase())).toBe(true);
        expect(checkMonth("January")).toBe(true);
        expect(checkMonth("February")).toBe(true);
        expect(checkMonth("March")).toBe(true);
        expect(checkMonth("April")).toBe(true);
        expect(checkMonth("May")).toBe(true);
        expect(checkMonth("June")).toBe(true);
        expect(checkMonth("July")).toBe(true);
        expect(checkMonth("August")).toBe(true);
        expect(checkMonth("September")).toBe(true);
        expect(checkMonth("October")).toBe(true);
        expect(checkMonth("November")).toBe(true);
        expect(checkMonth("December")).toBe(true);
    });
});