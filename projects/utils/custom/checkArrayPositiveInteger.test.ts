import {checkArrayPositiveInteger} from "./checkArrayPositiveInteger";


describe('Check Array Valid (min length and only positive integers)', () => {
    it('Test', () => {
        expect(checkArrayPositiveInteger('',0)).toBe(false);
        expect(checkArrayPositiveInteger('1',0)).toBe(true);
        expect(checkArrayPositiveInteger('hello',0)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 4',0)).toBe(true);
        expect(checkArrayPositiveInteger('10 20 30 40',0)).toBe(true);
        expect(checkArrayPositiveInteger('a 2 3 4',0)).toBe(false);
        expect(checkArrayPositiveInteger('1 a 3 4',0)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 a',0)).toBe(false);
        expect(checkArrayPositiveInteger('',1)).toBe(false);
        expect(checkArrayPositiveInteger('1',1)).toBe(true);
        expect(checkArrayPositiveInteger('hello',1)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 4',1)).toBe(true);
        expect(checkArrayPositiveInteger('10 20 30 40',1)).toBe(true);
        expect(checkArrayPositiveInteger('a 2 3 4',1)).toBe(false);
        expect(checkArrayPositiveInteger('1 a 3 4',1)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 a',1)).toBe(false);
        expect(checkArrayPositiveInteger('',2)).toBe(false);
        expect(checkArrayPositiveInteger('1',2)).toBe(false);
        expect(checkArrayPositiveInteger('hello',2)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 4',2)).toBe(true);
        expect(checkArrayPositiveInteger('10 20 30 40',2)).toBe(true);
        expect(checkArrayPositiveInteger('a 2 3 4',2)).toBe(false);
        expect(checkArrayPositiveInteger('1 a 3 4',2)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 a',2)).toBe(false);
        expect(checkArrayPositiveInteger('',3)).toBe(false);
        expect(checkArrayPositiveInteger('1',3)).toBe(false);
        expect(checkArrayPositiveInteger('1 2',3)).toBe(false);
        expect(checkArrayPositiveInteger('hello',3)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 4',3)).toBe(true);
        expect(checkArrayPositiveInteger('10 20 30 40',3)).toBe(true);
        expect(checkArrayPositiveInteger('a 2 3 4',3)).toBe(false);
        expect(checkArrayPositiveInteger('1 a 3 4',3)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 a',3)).toBe(false);
        expect(checkArrayPositiveInteger('',4)).toBe(false);
        expect(checkArrayPositiveInteger('1',4)).toBe(false);
        expect(checkArrayPositiveInteger('1 2',4)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3',4)).toBe(false);
        expect(checkArrayPositiveInteger('hello',4)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 4',4)).toBe(true);
        expect(checkArrayPositiveInteger('10 20 30 40',4)).toBe(true);
        expect(checkArrayPositiveInteger('a 2 3 4',4)).toBe(false);
        expect(checkArrayPositiveInteger('1 a 3 4',4)).toBe(false);
        expect(checkArrayPositiveInteger('1 2 3 a',)).toBe(false);
    });
});