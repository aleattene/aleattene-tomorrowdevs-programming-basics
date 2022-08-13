
import { changeMoney } from '../../solutions/aleattene/solution-003-making-change';

describe('calculateChange', () => {
    it('Test', () => {
        expect(changeMoney(200)).toEqual(
            { toonies: 1, loonies: 0, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
        );
        expect(changeMoney(100)).toEqual(
            { toonies: 0, loonies: 1, quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
        );
        expect(changeMoney(25)).toEqual(
            { toonies: 0, loonies: 0, quarters: 1, dimes: 0, nickels: 0, pennies: 0 }
        );
        expect(changeMoney(10)).toEqual(
            { toonies: 0, loonies: 0, quarters: 0, dimes: 1, nickels: 0, pennies: 0 }
        );
        expect(changeMoney(5)).toEqual(
            { toonies: 0, loonies: 0, quarters: 0, dimes: 0, nickels: 1, pennies: 0 }
        );
        expect(changeMoney(1)).toEqual(
            { toonies: 0, loonies: 0, quarters: 0, dimes: 0, nickels: 0, pennies: 1 }
        );
        expect(changeMoney(341)).toEqual(
            { toonies: 1, loonies: 1, quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
        );

    });
});