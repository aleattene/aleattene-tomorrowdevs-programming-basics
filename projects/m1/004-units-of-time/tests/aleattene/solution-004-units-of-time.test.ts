
import { getSeconds } from '../../solutions/aleattene/solution-004-units-of-time';

describe('Get Seconds', () => {
    it('Test', () => {
        expect(getSeconds(0,0,0,0)).toBe(0);
        expect(getSeconds(0,0,0,59)).toBe(59);
        expect(getSeconds(0,0,1,0)).toBe(60);
        expect(getSeconds(0,0,1,59)).toBe(119);
        expect(getSeconds(0,0,2,0)).toBe(120);
        expect(getSeconds(0,0,59,0)).toBe(3540);
        expect(getSeconds(0,1,0,0)).toBe(3600);
        expect(getSeconds(1,0,0,0)).toBe(86400);
    });
});