import {checkPositiveInteger} from "./number/checkInteger";
import {checkAlphabetLetter, checkLowerLettersAndSpaces} from "./string/checkLetter";
import {checkMonth} from "./date/checkMonth";
import {checkNote} from "./custom/checkNote";
import {checkArrayPositiveInteger} from "./custom/checkArrayPositiveInteger";
import {checkChessboardPosition} from "./custom/checkChessboardPosition";

export function dataInput(userMessage: string, dataType: string, minLengthArray?: number): string {
    const input = require('prompt-sync')();
    let value: string = input(userMessage);
    if (dataType === 'PositiveInteger') {
        let isPositiveInteger: boolean = checkPositiveInteger(value);
        while(!isPositiveInteger) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isPositiveInteger = checkPositiveInteger(value);
        }
    value = (~~(Number(value))).toString();
    }
    if (dataType === 'Integer') {
        let isInteger: boolean = Number.isInteger(Number(value)) && (value !== '');
        while (!isInteger) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isInteger = Number.isInteger(Number(value));
        }
        value = (~~(Number(value))).toString();
    }
    if (dataType === 'AlphabetLetter') {
        let isLetter: boolean = checkAlphabetLetter(value);
        while(!isLetter) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isLetter = checkAlphabetLetter(value);
        }
    }
    if (dataType === 'Month') {
        let isLetter: boolean = checkMonth(value);
        while(!isLetter) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isLetter = checkMonth(value);
        }
    }
    if (dataType === 'Note') {
        let isValidNote: boolean = checkNote(value);
        while(!isValidNote) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isValidNote = checkNote(value);
        }
    }
    if (dataType === 'LowerLetters') {
        let isValidNote: boolean = checkLowerLettersAndSpaces(value);
        while(!isValidNote) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isValidNote = checkLowerLettersAndSpaces(value);
        }
    }
    if (dataType === 'ArrayPositiveInteger') {
        let isValid: boolean = checkArrayPositiveInteger(value, minLengthArray);
        while (!isValid) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isValid = checkArrayPositiveInteger(value, minLengthArray);
        }
    }
    if (dataType === 'ChessboardPosition') {
        let isValid: boolean = checkChessboardPosition(value);
        while (!isValid) {
            console.log("Incorrect entry. Try again.");
            value = input(userMessage);
            isValid = checkChessboardPosition(value);
        }
    }
    return value;
}