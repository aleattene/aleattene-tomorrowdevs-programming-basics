// import {dataInput} from "../../../../utils/dataInput";

// let num: string = dataInput("Enter the integer number: ", "PositiveInteger");
//
// const sumDigitNumber = sumIntegerDigits(num);
//
// console.log(`Sum Digits of the number entered (${num}) = ${sumDigitNumber}.`);

export function sumIntegerDigits(integerNumber: string) {
    let sum: number = 0;
    for (let char of integerNumber) {
        sum += parseInt(char);
    }
    return sum;
}