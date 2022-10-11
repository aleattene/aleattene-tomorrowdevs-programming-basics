import {isPossibleChange} from "../../solutions/aleattene/solution-005-possible-change";

describe('Get Even Parity Bit', () => {
    it('Test', () => {
        const coinsDenominations: number[] = [0.25, 0.10, 0.05, 0.01];
        expect(isPossibleChange(0.01,1, coinsDenominations)).toBe(true);
    });
});