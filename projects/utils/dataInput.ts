import {checkPositiveInteger} from "./number/checkInteger";
import {checkAlphabetLetter} from "./string/checkLetter";
import {checkMonth} from "./date/checkMonth";

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
    if (dataType === 'Month') {
        let isLetter = checkMonth(value);
        while(!isLetter) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isLetter = checkMonth(value);
        }
    }
    return value;
}