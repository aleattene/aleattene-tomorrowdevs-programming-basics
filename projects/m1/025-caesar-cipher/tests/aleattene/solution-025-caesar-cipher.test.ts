import {caesarCipher, shiftedLetter} from "../../solutions/aleattene/solution-025-caesar-cipher";

describe('Caesar Cipher', () => {

    it('Test Shifted Letter', () => {
        const alphabetLowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        expect(shiftedLetter(alphabetLowerLetters, 'a', 1)).toBe('b');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 2)).toBe('c');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 3)).toBe('d');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 4)).toBe('e');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 5)).toBe('f');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 6)).toBe('g');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 7)).toBe('h');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 8)).toBe('i');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 9)).toBe('j');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 10)).toBe('k');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 11)).toBe('l');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 12)).toBe('m');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 13)).toBe('n');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 14)).toBe('o');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 15)).toBe('p');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 16)).toBe('q');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 17)).toBe('r');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 18)).toBe('s');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 19)).toBe('t');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 20)).toBe('u');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 21)).toBe('v');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 22)).toBe('w');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 23)).toBe('x');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 24)).toBe('y');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 25)).toBe('z');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 26)).toBe('a');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 27)).toBe('b');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 28)).toBe('c');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 29)).toBe('d');
        expect(shiftedLetter(alphabetLowerLetters, 'a', 30)).toBe('e');
        expect(shiftedLetter(alphabetLowerLetters, 'b', 26)).toBe('b');
    });

    it('Test Caesar Cipher', () => {
        expect(caesarCipher('a',1)).toBe('b');
    });
});