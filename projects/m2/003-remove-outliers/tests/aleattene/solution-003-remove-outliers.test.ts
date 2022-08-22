import {removeOutliersList, stringToArrayNumber} from "../../solutions/aleattene/solution-003-remove-outliers";

describe('Remove Outliers', () => {

    it('Test', () => {
        expect(stringToArrayNumber('1')).toEqual([1]);
        expect(stringToArrayNumber('1 2')).toEqual([1, 2]);
        expect(stringToArrayNumber('1 2')).toEqual([1, 2]);
        expect(stringToArrayNumber('1 2 3')).toEqual([1, 2, 3]);
        expect(stringToArrayNumber('1 2 3 4 ')).toEqual([1, 2, 3, 4]);
        expect(stringToArrayNumber('1 2 3 4 5')).toEqual([1, 2, 3, 4, 5]);
        expect(stringToArrayNumber(' 1 2 3 4 5 ')).toEqual([1, 2, 3, 4, 5]);
    });

    it('Test', () => {
        expect(removeOutliersList([1,2,3,4,5], 0)).toEqual([1,2,3,4,5]);
        expect(removeOutliersList([1,2,3,4,5], 1)).toEqual([2,3,4]);
        expect(removeOutliersList([1,2,3,4,5], 2)).toEqual([3]);
        expect(removeOutliersList([1,3,2,5,4], 0)).toEqual([1,2,3,4,5]);
        expect(removeOutliersList([2,1,3,5,4], 1)).toEqual([2,3,4]);
        expect(removeOutliersList([5,4,3,2,1], 2)).toEqual([3]);
    });
});