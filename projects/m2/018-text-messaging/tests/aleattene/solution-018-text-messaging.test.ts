import {symbolsToKey} from "../../solutions/aleattene/solution-018-text-messaging";

describe('Text Messaging', () => {
    it('Test', () => {
        const keySymbols: {[key: number] :string[] } = {
            1: [".", ",", "?", "!", ":"],
            2: ["A", "B", "C"],
            3: ["D", "E", "F"],
            4: ["G", "H", "I"],
            5: ["J", "K", "L"],
            6: ["M", "N", "O"],
            7: ["P", "Q", "R", "S"],
            8: ["T", "U", "V"],
            9: ["W", "X", "Y", "Z"],
            0: [" "]
        };
        expect(symbolsToKey('Hello, World!', keySymbols)).toBe('4433555555666110966677755531111');
        expect(symbolsToKey('.', keySymbols)).toBe('1');
        expect(symbolsToKey(',', keySymbols)).toBe('11');
        expect(symbolsToKey('?', keySymbols)).toBe('111');
        expect(symbolsToKey('!', keySymbols)).toBe('1111');
        expect(symbolsToKey(':', keySymbols)).toBe('11111');
        expect(symbolsToKey('A', keySymbols)).toBe('2');
        expect(symbolsToKey('B', keySymbols)).toBe('22');
        expect(symbolsToKey('C', keySymbols)).toBe('222');
        expect(symbolsToKey('D', keySymbols)).toBe('3');
        expect(symbolsToKey('E', keySymbols)).toBe('33');
        expect(symbolsToKey('F', keySymbols)).toBe('333');
        expect(symbolsToKey('G', keySymbols)).toBe('4');
        expect(symbolsToKey('H', keySymbols)).toBe('44');
        expect(symbolsToKey('I', keySymbols)).toBe('444');
        expect(symbolsToKey('J', keySymbols)).toBe('5');
        expect(symbolsToKey('K', keySymbols)).toBe('55');
        expect(symbolsToKey('L', keySymbols)).toBe('555');
        expect(symbolsToKey('M', keySymbols)).toBe('6');
        expect(symbolsToKey('N', keySymbols)).toBe('66');
        expect(symbolsToKey('O', keySymbols)).toBe('666');
        expect(symbolsToKey('P', keySymbols)).toBe('7');
        expect(symbolsToKey('Q', keySymbols)).toBe('77');
        expect(symbolsToKey('R', keySymbols)).toBe('777');
        expect(symbolsToKey('S', keySymbols)).toBe('7777');
        expect(symbolsToKey('T', keySymbols)).toBe('8');
        expect(symbolsToKey('U', keySymbols)).toBe('88');
        expect(symbolsToKey('V', keySymbols)).toBe('888');
        expect(symbolsToKey('W', keySymbols)).toBe('9');
        expect(symbolsToKey('X', keySymbols)).toBe('99');
        expect(symbolsToKey('Y', keySymbols)).toBe('999');
        expect(symbolsToKey('Z', keySymbols)).toBe('9999');
        expect(symbolsToKey(' ', keySymbols)).toBe('0');
        expect(symbolsToKey('a', keySymbols)).toBe('2');
        expect(symbolsToKey('b', keySymbols)).toBe('22');
        expect(symbolsToKey('c', keySymbols)).toBe('222');
        expect(symbolsToKey('d', keySymbols)).toBe('3');
        expect(symbolsToKey('e', keySymbols)).toBe('33');
        expect(symbolsToKey('f', keySymbols)).toBe('333');
        expect(symbolsToKey('g', keySymbols)).toBe('4');
        expect(symbolsToKey('h', keySymbols)).toBe('44');
        expect(symbolsToKey('i', keySymbols)).toBe('444');
        expect(symbolsToKey('j', keySymbols)).toBe('5');
        expect(symbolsToKey('k', keySymbols)).toBe('55');
        expect(symbolsToKey('l', keySymbols)).toBe('555');
        expect(symbolsToKey('m', keySymbols)).toBe('6');
        expect(symbolsToKey('n', keySymbols)).toBe('66');
        expect(symbolsToKey('o', keySymbols)).toBe('666');
        expect(symbolsToKey('p', keySymbols)).toBe('7');
        expect(symbolsToKey('q', keySymbols)).toBe('77');
        expect(symbolsToKey('r', keySymbols)).toBe('777');
        expect(symbolsToKey('s', keySymbols)).toBe('7777');
        expect(symbolsToKey('t', keySymbols)).toBe('8');
        expect(symbolsToKey('u', keySymbols)).toBe('88');
        expect(symbolsToKey('v', keySymbols)).toBe('888');
        expect(symbolsToKey('w', keySymbols)).toBe('9');
        expect(symbolsToKey('x', keySymbols)).toBe('99');
        expect(symbolsToKey('y', keySymbols)).toBe('999');
        expect(symbolsToKey('z', keySymbols)).toBe('9999');
    });
});