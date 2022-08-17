const numRolls: number = 1000;
const numDice: number = 2;

export function rollsTwoDice(numRolls: number, numDice: number) {
    const sidesDice: number = 6;
    const possibleRolls: number = sidesDice ** numDice;
    const summaryRolls : {[key: number] :number[]} = {};

    for (let i = 0; i < numRolls; i++) {
        let total: number = 0;
        for (let j = 0; j < numDice; j++) {
            total += Math.floor(Math.random() * sidesDice) + 1;
        }
        if (total in summaryRolls) summaryRolls[total][0] += ( 1 / (numRolls / 100));
        else {
            summaryRolls[total] = [ (1 / (numRolls / 100)) ];
            // Probability Theory
            if (total <= (sidesDice * numDice) / 2) summaryRolls[total].push((total - 1) / possibleRolls * 100);
            else summaryRolls[total].push(((sidesDice - (total - (sidesDice + 1))) / possibleRolls) * 100);
        }
    }
    return summaryRolls;
}

export function formatSummaryRolls (summary: {[key: string]:number[]}) {
    let output = "TOTAL     SIMULATED %   " + "  EXPECTED %";
    for (const key in summary) {
        const number = key.length === 1 ? ` ${key}` : key;
        const simulated = (number.length === 2 && (summary[key][0]) < 10) ? ` ${summary[key][0].toFixed(2)}` : summary[key][0].toFixed(2);
        const expected = (simulated.length === 5 && (summary[key][1]) < 10) ? ` ${summary[key][1].toFixed(2)}` : summary[key][1].toFixed(2);
        output += (`\n${number}          ${simulated}           ${expected}`);
    }
    return output;
}

const summary = rollsTwoDice(numRolls, numDice);
console.log(formatSummaryRolls(summary));
