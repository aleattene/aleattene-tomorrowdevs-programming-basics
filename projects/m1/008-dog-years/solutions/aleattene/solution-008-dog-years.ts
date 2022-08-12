// import {dataInput} from "../../../../utils/dataInput";

export function getDogYearsFromHumanYears (humanYears: number):number {
    if (humanYears >= 0 && humanYears <= 2) {
        return humanYears * 10.5;
    } else if (humanYears > 2) {
        return 21 + ((humanYears - 2) * 4);
    } else {
        return -1;
    }
}

// let humanYears: number = Number(dataInput("Enter the HUMAN Years: ", "PositiveInteger"));
//
// const dogYears = getDogYearsFromHumanYears(humanYears)
//
// if (dogYears) {
//     console.log(`${humanYears} human year(s) is equal to ${dogYears} dog year(s).`);
// } else {
//     console.log(`I'm sorry, the wrong human years (${humanYears}) were entered`);
// }