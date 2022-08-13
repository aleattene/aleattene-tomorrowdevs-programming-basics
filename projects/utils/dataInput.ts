import {checkPositiveInteger} from "./checkInteger";
import {checkAlphabetLetter} from "./checkLetter";

export function dataInput(userMessage: string, dataType: string): string {
    const input = require('prompt-sync')();
    let value: string = input(userMessage);
    if (dataType === 'PositiveInteger') {
        let isPositiveInteger = checkPositiveInteger(value);
        while(!isPositiveInteger) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isPositiveInteger = checkPositiveInteger(value);
        }
    value = (~~(Number(value))).toString();
    }
    if (dataType === 'AlphabetLetter') {
        let isLetter = checkAlphabetLetter(value);
        while(!isLetter) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isLetter = checkAlphabetLetter(value);
        }
    }
    return value;
}