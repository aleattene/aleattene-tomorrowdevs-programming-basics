import {translateToPigLatin} from "../../solutions/aleattene/solution-011-pig-latin";

describe('Translate to Pig Latin', () => {
    it('Test', () => {
        expect(translateToPigLatin(['computer'])).toEqual(['omputercay']);
        expect(translateToPigLatin(['think'])).toEqual(['inkthay']);
        expect(translateToPigLatin(['algorithm'])).toEqual(['algorithmway']);
        expect(translateToPigLatin(['office'])).toEqual(['officeway']);
        expect(translateToPigLatin(['computer', 'think', 'algorithm', 'office'])).toEqual(
            ['omputercay', 'inkthay', 'algorithmway', 'officeway']);
    });
});