import {displayPeopleSameWeight, reverseLookup} from "../../solutions/aleattene/solution-016-reverse-lookup";

describe('People Same Weight', () => {
    it('Test', () => {
        let peopleWeight: {[key:string]:number} = {
            'Alessandro': 95,
            'Daniela': 50,
            'Davide': 47,
            'Gianni': 50,
            'Aldo': 85,
            'Manuela': 50,
            'Francesco': 95
        };
        expect(reverseLookup(peopleWeight, 1)).toEqual([]);
        expect(reverseLookup(peopleWeight, 95)).toEqual(['Alessandro','Francesco']);
        expect(reverseLookup(peopleWeight, 50)).toEqual(['Daniela','Gianni','Manuela']);
        expect(reverseLookup(peopleWeight, 47)).toEqual(['Davide']);
        expect(reverseLookup(peopleWeight, 85)).toEqual(['Aldo']);
        peopleWeight = {
            'Alessandro': 50,
            'Daniela': 50,
            'Davide': 50,
            'Gianni': 50,
            'Aldo': 50,
            'Manuela': 50,
            'Francesco': 50
        };
        expect(reverseLookup(peopleWeight, 50)).toEqual(
            ['Alessandro','Daniela','Davide','Gianni','Aldo','Manuela','Francesco']);
    });
});

describe('Display People Same Weight', () => {
    it('Test', () => {
        let peopleSameWeight: string[] = [];
        let weight: number = 1;
        expect(displayPeopleSameWeight(peopleSameWeight, weight)).toBe(
            `No person weighs 1 kg.`);
        peopleSameWeight = ['Alessandro','Francesco'];
        weight = 95;
        expect(displayPeopleSameWeight(peopleSameWeight, weight)).toBe(
            `Alessandro, Francesco weigh 95 kg.`);
        peopleSameWeight = ['Daniela','Gianni','Manuela'];
        weight = 50;
        expect(displayPeopleSameWeight(peopleSameWeight, weight)).toBe(
            `Daniela, Gianni, Manuela weigh 50 kg.`);
        peopleSameWeight = ['Davide'];
        weight = 47;
        expect(displayPeopleSameWeight(peopleSameWeight, weight)).toBe(
            `Only Davide weighs 47 kg.`);
        peopleSameWeight = ['Aldo'];
        weight = 85;
        expect(displayPeopleSameWeight(peopleSameWeight, weight)).toBe(
            `Only Aldo weighs 85 kg.`);
    });
});