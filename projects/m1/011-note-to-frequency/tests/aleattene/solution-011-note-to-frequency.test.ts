import {getFrequencyFromNote} from '../../solutions/aleattene/solution-011-note-to-frequency';

describe('Note to Frequency', () => {

    it('Test', () => {
        expect(getFrequencyFromNote("A0")).toBe(440.00 * 0.0625);
        expect(getFrequencyFromNote("A1")).toBe(440.00 * 0.125);
        expect(getFrequencyFromNote("A2")).toBe(440.00 * 0.25);
        expect(getFrequencyFromNote("A3")).toBe(440.00 * 0.5);
        expect(getFrequencyFromNote("A4")).toBe(440.00);
        expect(getFrequencyFromNote("A5")).toBe(440.00 * 2);
        expect(getFrequencyFromNote("A6")).toBe(440.00 * 4);
        expect(getFrequencyFromNote("A7")).toBe(440.00 * 8);
        expect(getFrequencyFromNote("A8")).toBe(440.00 * 16);
        expect(getFrequencyFromNote("B0")).toBe(493.88 * 0.0625);
        expect(getFrequencyFromNote("B1")).toBe(493.88 * 0.125);
        expect(getFrequencyFromNote("B2")).toBe(493.88 * 0.25);
        expect(getFrequencyFromNote("B3")).toBe(493.88 * 0.5);
        expect(getFrequencyFromNote("B4")).toBe(493.88);
        expect(getFrequencyFromNote("B5")).toBe(493.88 * 2);
        expect(getFrequencyFromNote("B6")).toBe(493.88 * 4);
        expect(getFrequencyFromNote("B7")).toBe(493.88 * 8);
        expect(getFrequencyFromNote("B8")).toBe(493.88 * 16);
        expect(getFrequencyFromNote("C0")).toBe(261.63 * 0.0625);
        expect(getFrequencyFromNote("C1")).toBe(261.63 * 0.125);
        expect(getFrequencyFromNote("C2")).toBe(261.63 * 0.25);
        expect(getFrequencyFromNote("C3")).toBe(261.63 * 0.5);
        expect(getFrequencyFromNote("C4")).toBe(261.63);
        expect(getFrequencyFromNote("C5")).toBe(261.63 * 2);
        expect(getFrequencyFromNote("C6")).toBe(261.63 * 4);
        expect(getFrequencyFromNote("C7")).toBe(261.63 * 8);
        expect(getFrequencyFromNote("C8")).toBe(261.63 * 16);
        expect(getFrequencyFromNote("D0")).toBe(293.66 * 0.0625);
        expect(getFrequencyFromNote("D1")).toBe(293.66 * 0.125);
        expect(getFrequencyFromNote("D2")).toBe(293.66 * 0.25);
        expect(getFrequencyFromNote("D3")).toBe(293.66 * 0.5);
        expect(getFrequencyFromNote("D4")).toBe(293.66);
        expect(getFrequencyFromNote("D5")).toBe(293.66 * 2);
        expect(getFrequencyFromNote("D6")).toBe(293.66 * 4);
        expect(getFrequencyFromNote("D7")).toBe(293.66 * 8);
        expect(getFrequencyFromNote("D8")).toBe(293.66 * 16);
        expect(getFrequencyFromNote("E0")).toBe(329.63 * 0.0625);
        expect(getFrequencyFromNote("E1")).toBe(329.63 * 0.125);
        expect(getFrequencyFromNote("E2")).toBe(329.63 * 0.25);
        expect(getFrequencyFromNote("E3")).toBe(329.63 * 0.5);
        expect(getFrequencyFromNote("E4")).toBe(329.63);
        expect(getFrequencyFromNote("E5")).toBe(329.63 * 2);
        expect(getFrequencyFromNote("E6")).toBe(329.63 * 4);
        expect(getFrequencyFromNote("E7")).toBe(329.63 * 8);
        expect(getFrequencyFromNote("E8")).toBe(329.63 * 16);
        expect(getFrequencyFromNote("F0")).toBe(349.23 * 0.0625);
        expect(getFrequencyFromNote("F1")).toBe(349.23 * 0.125);
        expect(getFrequencyFromNote("F2")).toBe(349.23 * 0.25);
        expect(getFrequencyFromNote("F3")).toBe(349.23 * 0.5);
        expect(getFrequencyFromNote("F4")).toBe(349.23);
        expect(getFrequencyFromNote("F5")).toBe(349.23 * 2);
        expect(getFrequencyFromNote("F6")).toBe(349.23 * 4);
        expect(getFrequencyFromNote("F7")).toBe(349.23 * 8);
        expect(getFrequencyFromNote("F8")).toBe(349.23 * 16);
        expect(getFrequencyFromNote("G0")).toBe(392.00 * 0.0625);
        expect(getFrequencyFromNote("G1")).toBe(392.00 * 0.125);
        expect(getFrequencyFromNote("G2")).toBe(392.00 * 0.25);
        expect(getFrequencyFromNote("G3")).toBe(392.00 * 0.5);
        expect(getFrequencyFromNote("G4")).toBe(392.00);
        expect(getFrequencyFromNote("G5")).toBe(392.00 * 2);
        expect(getFrequencyFromNote("G6")).toBe(392.00 * 4);
        expect(getFrequencyFromNote("G7")).toBe(392.00 * 8);
        expect(getFrequencyFromNote("G8")).toBe(392.00 * 16);
    });
});