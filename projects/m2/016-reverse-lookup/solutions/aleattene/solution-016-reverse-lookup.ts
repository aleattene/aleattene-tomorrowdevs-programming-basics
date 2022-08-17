// import {dataInput} from "../../../../utils/dataInput";

const peopleWeight: {[key:string]:number} = {
    'Alessandro': 95,
    'Daniela': 50,
    'Davide': 47,
    'Gianni': 50,
    'Aldo': 85,
    'Manuela': 50,
    'Francesco': 95
}

export function reverseLookup(peopleWeight: { [key: string]:number }, weight: number) {
    const weights: string[] = [];
    for (const key in peopleWeight) {
        if (weight === peopleWeight[key]) weights.push(key);
    }
    return weights;
}

// const weight = Number(dataInput("Enter the weight to search for (kg): ", "PositiveInteger"));
//
// const results = reverseLookup(peopleWeight, weight);

export function displayPeopleSameWeight(results: string[], weight: number) {
    if (results.length === 0) return `No person weighs ${weight} kg.`
    else if (results.length === 1) return `Only ${results[0]} weighs ${weight} kg.`;
    else return `${results.join(', ')} weigh ${weight} kg.`;
}

// console.log(displayPeopleSameWeight(results, weight));