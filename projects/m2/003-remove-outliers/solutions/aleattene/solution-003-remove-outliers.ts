// import {dataInput} from "../../../../utils/dataInput";

export function  removeOutliersList(originalValues: number[], n: number) {
    const values: number[] = [...originalValues];
    values.sort((a,b) => a - b);
    return values.slice(n, values.length - n);
}

export function stringToArrayNumber(stringInteger: string): number[] {
    return stringInteger.trim().split(" ").map((value) => parseInt(value));
}

// const minLengthArray: number = 4;
// const values = dataInput("Enter the values (at least four) separated by a white space: ", "ArrayPositiveInteger", minLengthArray);
//
// const originalValues: number[] = stringToArrayNumber(values);
//
// const numOutliersToRemove = 2;
// const outliersRemoved = removeOutliersList(originalValues, numOutliersToRemove);
//
// console.log(`New List : ${outliersRemoved}\nOriginal List : ${values}`);

