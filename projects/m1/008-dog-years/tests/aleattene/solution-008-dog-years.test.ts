import {getDogYearsFromHumanYears} from '../../solutions/aleattene/solution-008-dog-years';

describe('Calculate Dog Years', () => {
    it('Test', () => {
        expect(getDogYearsFromHumanYears(1)).toBe(10.5);
        expect(getDogYearsFromHumanYears(2)).toBe(21);
        expect(getDogYearsFromHumanYears(3)).toBe(25);
        expect(getDogYearsFromHumanYears(5)).toBe(33);
        expect(getDogYearsFromHumanYears(10)).toBe(53);
        expect(getDogYearsFromHumanYears(20)).toBe(93);
        expect(getDogYearsFromHumanYears(0)).toBe(0);
        expect(getDogYearsFromHumanYears(-1)).toBe(-1);
        expect(getDogYearsFromHumanYears(-10)).toBe(-1);
    });
});