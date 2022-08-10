import {checkPositiveInteger} from "./checkInteger";

export function dataInput(userMessage: string, dataType: string): string {
    const input = require('prompt-sync')();
    let value: string = input(userMessage);
    if (dataType === 'PositiveInteger') {
        let isPositiveInteger = checkPositiveInteger(value);
        while(!isPositiveInteger) {
            console.log("Incorrect entry. Try again.");
            value = input("Enter the integer number: ");
            isPositiveInteger = checkPositiveInteger(value);
        }
    value = (~~(Number(value))).toString();
    }
    return value;
}