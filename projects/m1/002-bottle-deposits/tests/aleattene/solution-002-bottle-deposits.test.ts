
import { calculateRefund } from '../../solutions/aleattene/solution-002-bottle-deposits';

describe('calculateRefund', () => {
    it('Test', () => {
        expect(calculateRefund(100, 100)).toBe(35);
        expect(calculateRefund(100, 0)).toBe(10);
        expect(calculateRefund(100, 1)).toBe(10.25);
        expect(calculateRefund(1, 100)).toBe(25.10);
        expect(calculateRefund(0, 100)).toBe(25.00);
        expect(calculateRefund(0, 1)).toBe(0.25);
        expect(calculateRefund(1, 0)).toBe(0.10);
        expect(calculateRefund(0, 0)).toBe(0);

    });
});